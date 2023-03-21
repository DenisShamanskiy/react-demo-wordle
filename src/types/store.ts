interface IKeyBoardRow {
  value: string
  color: string
}

export interface IBoardRow {
  value: string
  color: string
}

export enum GameStatus {
  inGame = 'IN_GAME',
  win = 'WIN',
  leave = 'LEAVE',
  fail = 'FAIL',
}

export interface IGameState {
  board: IBoardRow[][]
  currentGuess: string
  currentRowIndex: number
  gameStatus: GameStatus
  keyBoard: IKeyBoardRow[][]
  nextLetter: number
  words: string[]
  currentWord: string
  previousWord: string
}

export enum NotificationColor {
  success = 'notify-success',
  failure = 'notify-failure',
  warning = 'notify-warning',
  info = 'notify-info',
}

export type NotificationType =
  | 'notify-success'
  | 'notify-failure'
  | 'notify-warning'
  | 'notify-info'
  | null

export type NotificationState = {
  type: NotificationType
  open: boolean
  message: string
}
