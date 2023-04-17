export type NonEmptyArr<T> = [T, ...T[]]

export type WordsResponse = {
  status: number
  errors?: string[]
}

export type BarRow = {
  percent: string
  count: number
}

export type Statistics = {
  win: number
  fail: number
  leave: number
  bar: BarRow[]
}

export type User = {
  id: string
  email: string
  username: string
  statistics: Statistics
  roles: NonEmptyArr<string>
  isActivated: boolean
}

export type AuthResponse = {
  accessToken: string
  refreshToken: string
  user: User
}

export type BaseResponse = {
  status: number
  message: string
  errors?: string[]
}
