import axios from 'axios'
import { server } from '../Store'

export const loadUser = () => async dispatch => {
  try {
    dispatch({
      type: 'loadUserRequest'
    })

    const { data } = await axios.get(`${server}/me`, { withCredentials: true })

    dispatch({
      type: 'loadUserSuccess',
      payload: data.user
    })
  } catch (error) {
    dispatch({
      type: 'loadUserFail',
      payload: error.response.data.message
    })
  }
}

export const logout = () => async dispatch => {
  try {
    dispatch({
      type: 'logoutRequest'
    })

    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true
    })

    dispatch({ type: 'logoutSuccess', payload: data.message })
  } catch (error) {
    dispatch({ type: 'logoutFail', payload: error.reponse.data.message })
  }
}
