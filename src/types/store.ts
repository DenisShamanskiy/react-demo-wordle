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
