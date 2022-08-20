// import React from 'react';
import Board from './Board';
import Keyboard from './Keyboard';
// import KeyboardRU from './KeyboardRu';

type B = {
  board: any[][]
  insertLetter: (pressedKey: string) => void
}

const Main = ({board, insertLetter} :B) => {
    
    return (
      <div className="w-full max-w-lg h-[calc(100%_-_2.5rem)] sm:h-[calc(100%_-_66px)] my-0 mx-auto flex flex-col">
        <Board board={board}/>
        <Keyboard insertLetter={insertLetter}/>
        {/* <KeyboardRU/> */}
      </div>
    );
  }
  
  export default Main;