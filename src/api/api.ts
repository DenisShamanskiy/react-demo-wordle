// import { API_URL } from 'http';
// import { AuthResponse } from 'models/response/AuthResponse';
import { Statistics } from 'models/IStats'
import AuthService from 'services/AuthService'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios').default

// const serverURLLocal = 'http://localhost:3002'
// const serverURL = 'https://react-demo-wordle-api.vercel.app/api/'

// type BarRow = {
//   name: number
//   percent: string
//   count: number
// }

// type Stats = {
//   win: number
//   loss: number
//   surrender: number
//   bar: BarRow[]
// }

// export async function registration(email: string, password: string ) {
//   console.log(email, password);

//   try {
//     const response = await axios({
//       method: 'post',
//       // url: 'https://react-demo-wordle-api.vercel.app/api/registration',
//       url: 'http://localhost:3002/api/registration',
//       data: {
//         email: email,
//         password: password,
//       },
//     })

//     console.log(response.data)

//     return response.data
//   } catch (e) {
//     console.log(e)
//   }
// }

// export async function login(email: string, password: string) {
//   try {
//     const response = await axios({
//       method: 'post',
//       // url: 'https://react-demo-wordle-api.vercel.app/api/login',
//       url: 'http://localhost:3002/api/login',
//       data: {
//         email: email,
//         password: password,
//       },
//     })

//     console.log(response)

//     return response
//   } catch (error) {
//     // console.log(error.response.data.message);
//     console.log(error)

//     return error.response
//   }
// }

export async function registration(email: string, password: string, statistics: Statistics) {
  console.log('api', statistics);
  try {
    const response = await AuthService.registration(email, password, statistics)
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
    const response = await AuthService.logout()
    console.log(response)

    localStorage.removeItem('token')
  } catch (e) {
    console.log(e.response?.data?.message)
  }
}

export async function checkAuth() {
  // this.setLoading(true);
  try {
    const response = await axios.get('http://localhost:3002/api/refresh', { withCredentials: true })
    console.log(response)
    localStorage.setItem('token', response.data.accessToken)
    // this.setAuth(true);
    // this.setUser(response.data.user);
  } catch (e) {
    console.log(e.response?.data?.message)
  } finally {
    // this.setLoading(false);
  }
}

export async function updateStatistics(id: string, statistics: Statistics) {
  try {
    const response = await axios({
      method: 'put',
      url: 'http://localhost:3002/api/user/statistics',
      data: {
        id: id,
        statistics: statistics,
      },
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}` 
      }
    })
    return response.data
  } catch (e) {
    console.log(e)
  }
}
