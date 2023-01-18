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
  email: string
  id: string
  isActivated: boolean
  roles: NonEmptyArr<string>
  statistics: Statistics
  username: string
}

export type AuthResponse = {
  accessToken: string
  refreshToken: string
  user: User
}
