import axios from 'axios'
import { API_URL } from 'http/index'
import { AuthForm } from 'models/IFormValues'
import AuthService from 'services/AuthService'

export const signup = async (data: AuthForm) => {
  try {
    const response = await AuthService.signup(data)
    console.log(response)
    localStorage.setItem('token', response.data.accessToken)
    return response.data
  } catch (e) {
    console.log(e.response?.data?.message)
    return e.response?.data?.message
  }
}

export const signin = async (data: AuthForm) => {
  try {
    const response = await AuthService.signin(data)
    localStorage.setItem('token', response.data.accessToken)
    return response.data
  } catch (e) {
    console.log(e.response?.data?.message)
    return e.response?.data?.message
  }
}

export const signout = async () => {
  try {
    await AuthService.signout()
    localStorage.removeItem('token')
  } catch (e) {
    console.log(e.response?.data?.message)
    return e.response?.data?.message
  }
}

export const checkAuth = async () => {
  try {
    const response = await axios.get(`${API_URL}/refresh`, {
      withCredentials: true,
    })
    localStorage.setItem('token', response.data.accessToken)
    return response
  } catch (e) {
    console.log(e.response?.data?.message)
    return e.request.status
  }
}
