import React, { useState } from 'react';

const Board = () => {

    const [board, setBoard] = useState([...new Array(6)].map(function(it, inde) {
        return inde === 0 ? new Array(5).fill("w") : new Array(5).fill("")
    }))
    
    return (
      <div className="w-full max-w-lg h-[calc(100%_-_2.5rem)] sm:h-[calc(100%_-_66px)] my-0 mx-auto flex flex-col">
        <div className="flex justify-center items-center grow overflow-hidden">
            <div className="w-[350px] h-[420px] p-2.5 grid grid-rows-6 gap-[5px] box-border">
            {board.map((_, index) => {
                return (
                <div className="grid grid-cols-5 gap-[5px]" key={Math.random()}>
                    {board[index].map((item: string | undefined, _ind) => {
                        return (
                        <div className={
                        `letter ${item ? "letter-white" : ""}`} key={Math.random()}>{item}</div>
                  );
              })}
              </div>
          );
        })}
            </div>
        </div>
      </div>
    );
  }
  
  export default Board;