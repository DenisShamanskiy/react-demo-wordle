import { useAppDispatch, useAppSelector } from 'hook';
import React from 'react';
import { addLetter, colorLetter, removeLetter } from 'store/boardSlice';
import { addCurrentGuess, removeCurrentGuess, resetCurrentGuess } from 'store/currentGuessSlice';
import { decreaseLetters, increaseLetters, resetLetters } from 'store/nextLetterSlice';
import Header from './Header';
import Main from './Main';
import { WORDS } from "../words"
import { decreaseGuessesRemaining, resetGuessesRemaining } from 'store/guessesRemainingSlice';

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

  function checkGuess () {
    const guessString = currentGuess.join("")
    const indexColorArray: number[] = []
    for (let i = 0; i < 5; i++) {
      indexColorArray.push(rightGuess.indexOf(currentGuess[i]!))
    }
    if (guessString.length !== 5) {
      console.log("Введены не все буквы!");
      alert("Введены не все буквы!")
      return;
    }
    if (!WORDS.includes(guessString)) {
      console.log("Такого слова нет в списке!")
      alert("Такого слова нет в списке!")
      return;
    }
    dispatch(colorLetter({ indexColorArray, guessesRemaining, currentGuess, rightGuess }))
    if (guessString === rightGuess) {
      console.log("Вы выиграли!");
      alert("Вы выиграли!")
      dispatch(resetGuessesRemaining())
      return;
    } else {
      dispatch(decreaseGuessesRemaining())
      dispatch(resetCurrentGuess())
      dispatch(resetLetters())
    }
  }
  // if (guessesRemaining === 0) {
  //   console.log("У вас не осталось попыток. Вы проиграли!");
  //   alert("У вас не осталось попыток. Вы проиграли!")
  //   console.log(`Загаданное слово: "${rightGuess}"`);
  //   alert(`Загаданное слово: "${rightGuess}"`)
  // }

  return (
    <div className="App w-screen h-screen min-w-[414px] focus:outline-none" tabIndex={0} onKeyDown={keyDownHandler}>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
