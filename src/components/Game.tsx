import React from 'react'
import { WORDS } from 'utils/constants'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import Board from './Board'
import Keyboard from './Keyboard'
import {
  addLetterBoard,
  gameLost,
  gameWon,
  nextStep,
  removeLetterBoard,
  setHardMode,
} from 'store/persistSlice'
import { openModal } from 'store/modalSlice'

// import Board from './Board'
// import Keyboard from './Keyboard'

function Game() {
  const dispatch = useAppDispatch()

  const {
    hardMode: { active, letters },
  } = useAppSelector((state) => state.persist.settings)
  const {
    nextLetter,
    currentGuess,
    word: { currentWord },
    currentRowIndex,
    gameStatus,
  } = useAppSelector((state) => state.persist.game)

  // const showAlert = (open: boolean, message: string) => {
  //   if (!alert.open) {
  //     dispatch(handleAlert({ open: open, message: message }))
  //     setTimeout(() => {
  //       dispatch(handleAlert({ open: false, message: alert.message }))
  //     }, 5000)
  //   }
  // }

  const checkGuess = () => {
    const currentGuessStr = currentGuess.join('')
    if (currentGuessStr.length !== 5) {
      // showAlert(true, 'Введены не все буквы')
      return
    }
    if (!WORDS.includes(currentGuessStr)) {
      // showAlert(true, 'Такого слова нет в списке')
      return
    }
    const indexColorArray: number[] = []
    for (let i = 0; i < 5; i++) {
      indexColorArray.push(currentWord.indexOf(currentGuess[i]!))
    }
    const lettersHardMode = [
      ...new Set([...currentWord].filter((letter) => currentGuess.includes(letter))),
    ]
    if (active) {
      if (
        letters.length === 0 ||
        (letters.length > 0 && letters.every((item) => currentGuess.includes(item)))
      ) {
        handleGuess(lettersHardMode, currentGuessStr, indexColorArray)
      } else if (letters.length > 0 && !letters.every((item) => currentGuess.includes(item))) {
        // showAlert(true, 'Использованы не все подсказки')
      }
    }
    if (!active) {
      handleGuess(lettersHardMode, currentGuessStr, indexColorArray)
    }
  }
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const pressedKey = event.currentTarget.dataset['key']!
    if (gameStatus === 'WIN') return
    if (pressedKey === '←' && nextLetter !== 0) {
      dispatch(removeLetterBoard())
      return
    }
    if (pressedKey === '↵') {
      checkGuess()
      return
    }
    const found = pressedKey.match(/[а-яА-ЯЁё]/gi)
    if (!found || found.length > 1) return
    else dispatch(addLetterBoard(pressedKey))
  }

  const handleGuess = (
    lettersHardMode: string[],
    currentGuessStr: string,
    indexColorArray: number[],
  ) => {
    dispatch(setHardMode({ active: active, letters: lettersHardMode }))
    if (currentGuessStr === currentWord) {
      dispatch(gameWon(indexColorArray))
      dispatch(openModal({ open: true, window: 'Win' }))
    } else {
      dispatch(nextStep(indexColorArray))
      if (currentRowIndex === 5) {
        dispatch(gameLost())
        dispatch(openModal({ open: true, window: 'GameLost', title: 'Проиграл' }))
      }
    }
  }

  return (
    <>
      <Board />
      <Keyboard handleClick={handleClick} />
    </>
  )
}

export default Game
