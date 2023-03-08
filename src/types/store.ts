export type BoardRow = {
  value: string
  color: string
}

type KeyBoardRow = {
  value: string
  color: string
}

export type gameState = {
  board: BoardRow[][]
  currentGuess: string[]
  currentRowIndex: number
  gameStatus: string
  keyBoard: KeyBoardRow[][]
  nextLetter: number
  word: {
    words: string[]
    currentWord: string
    previousWord: string
  }
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
