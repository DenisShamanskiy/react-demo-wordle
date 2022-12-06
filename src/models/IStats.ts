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
