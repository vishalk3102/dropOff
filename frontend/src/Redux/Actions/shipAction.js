import ShippingRates from '../../Data/ShippingRate'

export const calculateRate =
  (length, width, height, quantity, weight, fromCity, tocity) =>
  async dispatch => {
    try {
      let size = length * width * height
      let rate = 0
      if (size <= 1) {
        rate = 20
      } else if (size > 1 && size <= 10) {
        rate = 30
      } else if (size > 10 && size <= 20) {
        rate = 40
      } else {
        rate = 50
      }

      rate = ShippingRates[fromCity][tocity] * weight * quantity
      dispatch({ type: 'calculatePrice', payload: rate })
    } catch (error) {
      dispatch({ type: 'calculatePrice', payload: 0 })
    }
  }
