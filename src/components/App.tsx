import React from 'react';
import { useAppDispatch, useAppSelector } from 'hook';
import { setAlert } from 'store/alertSlice';
import { addLetter, colorLetter, removeLetter } from 'store/boardSlice';
import { addCurrentGuess, removeCurrentGuess, resetCurrentGuess } from 'store/currentGuessSlice';
import { decreaseGuessesRemaining, resetGuessesRemaining } from 'store/guessesRemainingSlice';
import { decreaseLetters, increaseLetters, resetLetters } from 'store/nextLetterSlice';
import Alert from './Alert';
import Header from './Header';
import Main from './Main';
import { WORDS } from "../words"

function App() {

  const dispatch = useAppDispatch();
  const nextLetter  = useAppSelector(state => state.nextLetter.nextLetterSlice);
  const guessesRemaining  = useAppSelector(state => state.guessesRemaining.guessesRemainingSlice);
  const currentGuess  = useAppSelector(state => state.currentGuess.currentGuessSlice);
  const rightGuess  = useAppSelector(state => state.rightGuess.rightGuessSlice);
  
  const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (guessesRemaining === 0) return
    let pressedKey = String(event.key) 
    if (pressedKey === "Backspace" && nextLetter !== 0) {
      deleteLetter();
      return;
    }
    if (pressedKey === "Enter") {
      checkGuess();
      return;
    }
    let found = pressedKey.match(/[a-z]/gi)
    if (!found || found.length > 1) return
    else insertLetter(pressedKey)
  };

  function insertLetter(pressedKey: string) {
    if (nextLetter === 5) return
    dispatch(addLetter({guessesRemaining, nextLetter, pressedKey}))
    dispatch(addCurrentGuess({pressedKey}))
    dispatch(increaseLetters())
  }

  function deleteLetter() {
    dispatch(removeLetter({guessesRemaining, nextLetter}))
    dispatch(removeCurrentGuess())
    dispatch(decreaseLetters())
  }

  function handleAlert(o: boolean, m: string, s: string) {
    dispatch(setAlert({open: o, message: m, style: s}))
    setTimeout(() => {
      dispatch(setAlert({open: false, message: "", style: ""}))
    }, 4000);
  }

  function checkGuess () {
    const guessString = currentGuess.join("")
    const indexColorArray: number[] = []
    for (let i = 0; i < 5; i++) {
      indexColorArray.push(rightGuess.indexOf(currentGuess[i]!))
    }
    if (guessString.length !== 5) {
      handleAlert(true, "Введены не все буквы", "bg-yellow-100 text-yellow-700")
      return;
    }
    if (!WORDS.includes(guessString)) {
      handleAlert(true, "Такого слова нет в списке", "bg-yellow-100 text-yellow-700")
      return;
    }
    dispatch(colorLetter({ indexColorArray, guessesRemaining, currentGuess, rightGuess }))
    if (guessString === rightGuess) {
      handleAlert(true, "Вы выиграли!", "bg-green-100 text-green-700")
      dispatch(resetGuessesRemaining())
      return;
    } else {
      dispatch(decreaseGuessesRemaining())
      dispatch(resetCurrentGuess())
      dispatch(resetLetters())
    }
  }
  if (guessesRemaining === 0 && currentGuess.join("") !== rightGuess) {
    dispatch(setAlert({open: true, message: `Вы проиграли! Загаданное слово: "${rightGuess}"`, style: "bg-red-100 text-red-700"}))
    dispatch(resetGuessesRemaining())
  }

  return (
    <div className="App relative w-screen h-screen min-w-[414px] focus:outline-none" tabIndex={0} onKeyDown={keyDownHandler}>
      <Header/>
      <Alert/>
      <Main/>
    </div>
  );
}

export default App;
