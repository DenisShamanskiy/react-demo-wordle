import { API_URL } from 'http/index'
import { Statistics } from 'models/IStats'
import AuthService from 'services/AuthService'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios').default

export async function registration(
  email: string,
  password: string,
  statistics: Statistics,
) {
  try {
    const response = await AuthService.registration(email, password, statistics)
    console.log(response)

    localStorage.setItem('token', response.data.accessToken)
    return response.data
  } catch (e) {
    console.log(e.response?.data?.message)
    return e.response?.data?.message
  }
}

export async function login(email: string, password: string) {
  try {
    const response = await AuthService.login(email, password)
    localStorage.setItem('token', response.data.accessToken)
    return response
  } catch (e) {
    console.log(e.response?.data?.message)
    return e.response?.data?.message
  }
}

export async function logout() {
  try {
    await AuthService.logout()
    localStorage.removeItem('token')
  } catch (e) {
    console.log(e.response?.data?.message)
  }
}

export async function checkAuth() {
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

export async function updatePrifile(
  id: string,
  username: string,
  email: string,
) {
  try {
    const response = await axios({
      method: 'put',
      url: `${API_URL}/profile/edit`,
      data: {
        id: id,
        username: username,
        email: email,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    return response.data
  } catch (e) {
    console.log(e)
  }
}

export async function updateStatistics(id: string, statistics: Statistics) {
  try {
    const response = await axios({
      method: 'put',
      url: `${API_URL}/user/statistics`,
      data: {
        id: id,
        statistics: statistics,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    return response.data
  } catch (e) {
    console.log(e)
  }
}

// WORDS //

export async function getWords() {
  try {
    const response = await axios({
      method: 'get',
      url: `${API_URL}/admin/words`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export async function addNewWord(id: string, word: string) {
  try {
    const response = await axios({
      method: 'put',
      url: `${API_URL}/admin/words/add-word`,
      data: {
        id: id,
        word: word,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    return response.data.words
  } catch (error) {
    console.log(error)
  }
}

export async function deleteWord(id: string, word: string) {
  try {
    const response = await axios({
      method: 'put',
      url: `${API_URL}/admin/words/delete-word`,
      data: {
        id: id,
        word: word,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    return response.data.words
  } catch (e) {
    console.log(e)
  }
}
