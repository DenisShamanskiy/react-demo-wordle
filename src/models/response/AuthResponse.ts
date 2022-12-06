import { Statistics } from 'models/IStats'
import { IUser } from '../IUser'

export interface AuthResponse {
  accessToken: string
  refreshToken: string
  user: IUser
  statistics: Statistics
}
