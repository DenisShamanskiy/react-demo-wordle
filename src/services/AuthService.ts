import $api from '../http'
import { AxiosResponse } from 'axios'
import { AuthResponse } from '../models/response/AuthResponse'
import { AuthForm } from 'models/IFormValues'

export default class AuthService {
  static async signin(data: AuthForm): Promise<AxiosResponse<AuthResponse>> {
    const { email, password } = data
    return $api.post<AuthResponse>('/login', { email, password })
  }

  static async signup(data: AuthForm): Promise<AxiosResponse<AuthResponse>> {
    const { email, password } = data
    return $api.post<AuthResponse>('/registration', { email, password })
  }

  static async signout(): Promise<void> {
    return $api.post('/logout')
  }
}
