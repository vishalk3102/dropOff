import axios from 'axios'
import { server } from '../Store'

export const createOrder =
  (
    senderDetails,
    receiverDetails,
    shippingItems,
    shippingcharges,
    totalAmount
  ) =>
  async dispatch => {
    try {
      dispatch({
        type: 'createOrderRequest'
      })

      const { data } = await axios.post(
        `${server}/createorder`,
        {
          senderDetails,
          receiverDetails,
          shippingItems,
          shippingcharges,
          totalAmount
        },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      )

      dispatch({
        type: 'createOrderSuccess',
        payload: data.message
      })
    } catch (error) {
      dispatch({
        type: 'createOrderFail',
        payload: error.response.data.message
      })
    }
  }

export const paymentVerification =
  (razorpay_payment_id, razorpay_order_id, razorpay_signature, orderOptions) =>
  async dispatch => {
    try {
      dispatch({
        type: 'paymentVerificationRequest'
      })

      const { data } = await axios.post(
        `${server}/paymentverification`,
        {
          razorpay_payment_id,
          razorpay_order_id,
          razorpay_signature,
          orderOptions
        },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      )

      dispatch({
        type: 'paymentVerificationSuccess',
        payload: data.message
      })
    } catch (error) {
      dispatch({
        type: 'paymentVerificationFail',
        payload: error.response.data.message
      })
    }
  }

export const getMyOrders = () => async dispatch => {
  try {
    dispatch({ type: 'getMyOrderRequest' })

    const { data } = await axios.get(`${server}/myorders`, {
      withCredentials: true
    })

    dispatch({ type: 'getMyOrderSuccess', payload: data.orders })
  } catch (error) {
    dispatch({
      type: 'getMyOrderFail',
      payload: error.response.data.message
    })
  }
}

export const getOrderDetails = id => async dispatch => {
  try {
    dispatch({ type: 'getOrderDetailsRequest' })

    const { data } = await axios.get(`${server}/order/${id}`, {
      withCredentials: true
    })

    dispatch({ type: 'getOrderDetailsSuccess', payload: data.order })
  } catch (error) {
    dispatch({
      type: 'getOrderDetailsFail',
      payload: error.response.data.message
    })
  }
}

export const trackOrderDetails = trackingID => async dispatch => {
  try {
    dispatch({ type: 'trackOrderDetailsRequest' })

    const { data } = await axios.get(
      `${server}/track?trackingID=${trackingID}`,
      {
        withCredentials: true
      }
    )

    dispatch({ type: 'trackOrderDetailsSuccess', payload: data.track })
  } catch (error) {
    dispatch({
      type: 'trackOrderDetailsFail',
      payload: error.response.data.message
    })
  }
}
