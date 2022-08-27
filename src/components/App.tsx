import React, { useEffect } from 'react';
import 'tw-elements';
import { WORDS } from 'words';
import { useAppDispatch, useAppSelector } from 'hook';
import { setAlert } from 'store/alertSlice';
import { addLetter, colorLetter, removeLetter } from 'store/boardSlice';
import { addCurrentGuess, removeCurrentGuess, resetCurrentGuess } from 'store/currentGuessSlice';
import { decreaseGuessesRemaining, resetGuessesRemaining } from 'store/guessesRemainingSlice';
import { colorKey } from 'store/keyboardSlice';
import { activeModal } from 'store/modalSlice';
import { decreaseLetters, increaseLetters, resetLetters } from 'store/nextLetterSlice';
import Alert from './Alert';
import Header from './Header';
import Main from './Main';
import useCurrentHeight from 'utils/getHeight';
import Modal from './Modal';

function App() {
  const styleHeight = {
    height: `${useCurrentHeight()}px`,
  };
  const dispatch = useAppDispatch();
  const board  = useAppSelector(state => state.board.board);
  const nextLetter  = useAppSelector(state => state.nextLetter.nextLetterSlice);
  const guessesRemaining  = useAppSelector(state => state.guessesRemaining.guessesRemainingSlice);
  const currentGuess  = useAppSelector(state => state.currentGuess.currentGuessSlice);
  const rightGuess  = useAppSelector(state => state.rightGuess.rightGuessSlice);
  const { open }  = useAppSelector(state => state.modal.modalSlice);
  // console.log(rightGuess);
  // console.log(board[5]?.every((item) => item.color !== ""));
  
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
      dispatch(activeModal(false))
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
  if (guessesRemaining === 0 && currentGuess.join("") !== rightGuess && board[5]?.every((item) => item.color !== "")) {
    dispatch(setAlert({open: true, message: `Вы проиграли! Загаданное слово: "${rightGuess}"`, style: "bg-red-100 text-red-700"}))
    dispatch(resetGuessesRemaining())
  }

  useEffect(() => {
    if (guessesRemaining < 6) {
      dispatch(colorKey(board[6 - (guessesRemaining + 1)]!))
    }
  }, [guessesRemaining]) // eslint-disable-line
  
  return (
    <div className="App relative w-screen min-w-[414px] focus:outline-none"
      style={styleHeight}
      tabIndex={0}
      onKeyDown={keyDownHandler}>
        <Header/>
        <Alert/>
        <Main handleClick={handleClick}/>
        <Modal>
        <>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint quis ipsum. Magni quia odio ea molestias. Excepturi reprehenderit doloremque illo reiciendis facilis nostrum ab modi tempore voluptatibus exercitationem, dignissimos temporibus, ipsam maiores ea! Quasi suscipit doloremque labore? Voluptates, assumenda in ullam non voluptatem ex quibusdam totam a animi reprehenderit.</p>
        <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
          <button type="button" className="inline-block px-6 py-2.5 bg-[#d3d6da] text-[#000000] font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => dispatch(activeModal(false))}>Нет</button>
          <button type="button"
          className="inline-block px-6 py-2.5 bg-[#6aaa64] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"  onClick={() => dispatch(activeModal(false))}>Да</button>
        </div>
        </>
        </Modal>
    </div>
  );
}

export default App;
