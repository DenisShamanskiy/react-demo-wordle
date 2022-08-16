import React, { useEffect, useState } from 'react';
// import './Main.css';

const Main = () => {

    const [board, setBoard] = useState([...new Array(6)].map(function(it, inde) {
        return inde === 0 ? new Array(5).fill("w") : new Array(5).fill("")
    }))
    console.log(board);
    
    const [letterColor, setLetterColor] = useState([...new Array(6)].map(() => new Array(5).fill("")))
    // bg-neutral-500
    // bg-yellow-500
    // bg-green-500

    return (
      <div className="w-full max-w-lg h-[calc(100%_-_2.5rem)] my-0 mx-auto flex flex-col">
        <div className="flex justify-center items-center grow overflow-hidden">
            <div className="w-[350px] h-[420px] p-2.5 grid grid-rows-6 gap-[5px] box-border">
            {board.map((_, index) => {
                return (
                <div className="grid grid-cols-5 gap-[5px]" key={Math.random()}>
                    {board[index].map((item: string | undefined, ind) => {
                        return (
                        <div className={
                        `w-full inline-flex justify-center items-center text-[2rem] leading-8 font-bold align-middle box-border  uppercase select-none border-2 ${item ? "border-gray-500 bg-green-500 text-white" : "border-gray-300"} ${letterColor[index][ind] ? letterColor[index][ind] : ""}`} key={Math.random()}>{item}</div>
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
  
  export default Main;