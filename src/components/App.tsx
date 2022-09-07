import React, { useEffect } from 'react';
import { WORDS } from 'words';
import { useAppDispatch, useAppSelector } from 'hook';
import useCurrentHeight from 'utils/getHeight';
import { setAlert } from 'store/alertSlice';
import { addLetter, colorLetter, localBoard, removeLetter } from 'store/boardSlice';
import { addCurrentGuess, localCurrentGuess, removeCurrentGuess, resetCurrentGuess } from 'store/currentGuessSlice';
import { decreaseGuessesRemaining, localGuessesRemaining, resetGuessesRemaining } from 'store/guessesRemainingSlice';
import { colorKey, localKeyBoard } from 'store/keyboardSlice';
import { activeModal } from 'store/modalSlice';
import { decreaseLetters, increaseLetters, localLetters, resetLetters } from 'store/nextLetterSlice';
import Alert from './Alert';
import Header from './Header';
import Board from './Board';
import Keyboard from './Keyboard';
import Modal from './Modal';
import { GameLost, LeaveGame, Restart, Rules, Stats } from './ModalContent'
import { localRightGuess, startRightGuess } from 'store/rightGuessSlice';
import { localStats, lossStats, winStats } from 'store/statsSlice';

function App() {
  const styleHeight = {
    height: `${useCurrentHeight()}px`,
  };
  const dispatch = useAppDispatch();
  const board = useAppSelector(state => state.board.board);
  const nextLetter = useAppSelector(state => state.nextLetter.nextLetterSlice);
  const guessesRemaining = useAppSelector(state => state.guessesRemaining.guessesRemainingSlice);
  const currentGuess = useAppSelector(state => state.currentGuess.currentGuessSlice);
  const { currentWord } = useAppSelector(state => state.rightGuess.rightGuessSlice);
  const { open, window, title } = useAppSelector(state => state.modal.modalSlice);
  
  const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (guessesRemaining === 0) return
    let pressedKey = String(event.key) 
    if (pressedKey.length === 1 && pressedKey.match(/[a-z]/gi)) {
      handleAlert(true, "Игра поддерживает только русский язык", "bg-yellow-100 text-yellow-700")
      return;
    }
    if (pressedKey === "Backspace" && nextLetter !== 0) {
      deleteLetter();
      return;
    }
    if (pressedKey === "Enter") {
      checkGuess();
      return;
    }
    if (pressedKey === "Escape" && open) {
      dispatch(activeModal({open: false, window: window, title: title}))
      return;
    }
    let found = pressedKey.match(/[а-яА-ЯЁё]/gi)
    if (!found || found.length > 1) return
    else insertLetter(pressedKey)
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (guessesRemaining === 0) return
    let pressedKey = event.currentTarget.dataset["key"]! 
    if (pressedKey === "←" && nextLetter !== 0) {
      deleteLetter();
      return;
    }
    if (pressedKey === "↵") {
      checkGuess();
      return;
    }
    let found = pressedKey.match(/[а-яА-ЯЁё]/gi)
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
      indexColorArray.push(currentWord.indexOf(currentGuess[i]!))
    }
    if (guessString.length !== 5) {
      handleAlert(true, "Введены не все буквы", "bg-yellow-100 text-yellow-700")
      return;
    }
    if (!WORDS.includes(guessString)) {
      handleAlert(true, "Такого слова нет в списке", "bg-yellow-100 text-yellow-700")
      return;
    }
    dispatch(colorLetter({ indexColorArray, guessesRemaining, currentGuess, currentWord }))
    if (guessString === currentWord) {
      handleAlert(true, "Вы выиграли!", "bg-green-100 text-green-700")
      dispatch(resetGuessesRemaining())
      dispatch(winStats())
      return;
    } else {
      dispatch(decreaseGuessesRemaining())
      dispatch(resetCurrentGuess())
      dispatch(resetLetters())
      localStorage.setItem('word', currentWord)
      if (guessesRemaining - 1 === 0) {
        dispatch(resetGuessesRemaining())
        dispatch(lossStats())
        dispatch(activeModal({open: true, window: "GameLost"}))
      }
    }
  }
  
  const showModal = (modal: string) => {
    switch (modal) {
      case "Restart":
        return <Restart/>
      case "GameLost":
        return <GameLost/>
      case "LeaveGame":
        return <LeaveGame/>
      case "Rules":
        return <Rules/>
      case "Stats":
        return <Stats/>
      default:
        return undefined
    }
  }

  const handleLocal = () => {
    if (localStorage.getItem("word")) {
      dispatch(localRightGuess())
    } else {
      dispatch(startRightGuess())
    }
    if (localStorage.getItem("nextLetter")) {
      dispatch(localLetters())
    }
    if (localStorage.getItem("currentGuess")) {
      dispatch(localCurrentGuess())
    }
    if (localStorage.getItem("board")) {
      dispatch(localBoard())
    }
    if (localStorage.getItem("keyBoard")) {
      dispatch(localKeyBoard())
    }
    if (localStorage.getItem("guessesRemaining")) {
      dispatch(localGuessesRemaining())
    }
    if (localStorage.getItem("stats")) {
      dispatch(localStats())
    }
  }

  useEffect(() => {
   handleLocal()
  }, []) // eslint-disable-line
  
  useEffect(() => {
    if (guessesRemaining < 6) {
      dispatch(colorKey(board[6 - (guessesRemaining + 1)]!))
    }
  }, [guessesRemaining]) // eslint-disable-line
  
  return (
    <div className="relative w-screen min-w-[414px] flex flex-col justify-center content-between focus:outline-none"
      style={styleHeight}
      tabIndex={0}
      onKeyDown={keyDownHandler}>
        <Header/>
        <Alert/>
        <Board/>
        <Keyboard handleClick={handleClick}/>
        <Modal>
          {showModal(window)}
        </Modal>
    </div>
  );
}

export default App;
