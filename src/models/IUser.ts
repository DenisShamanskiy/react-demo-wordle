type BarRow = {
  name: number
  percent: string
  count: number
}

export type Statistics = {
  win: number
  loss: number
  surrender: number
  bar: BarRow[]
}

export interface IUser {
  // email: string
  // isActivated: boolean
  // id: string
  // statistics: Statistics
  id: string | null
  email: string | null
  username: string | null
  isLoggedIn: boolean
  isActivated: boolean
  statistics: Statistics
  roles: string[]
}
