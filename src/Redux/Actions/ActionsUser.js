import config from '../../Utils/config'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

export const getUser = (callback) => async dispatch => {
  try {
    const token = await AsyncStorage.getItem('token')
    const res = await axios.get(config.APP_BACKEND.concat('user/details/10'))
    callback(true)
    console.log('ini akun', res)
    dispatch({
      type: 'GET_USER',
      payload: res.data.data
    })
  } catch (error) {
    console.log(error)
  }
}