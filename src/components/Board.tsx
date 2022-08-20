// import { useEffect, useState } from 'react';

type B = {
    board: any[][]
  }
  

const Board = ({board} :B ) => {
    console.log(board);
    

    // const [board, setBoard] = useState([...new Array(6)].map(() => new Array(5).fill(Object.create({}, { 
    //     value: { value: "" },
    //     color: { value: "" } }))))
    // const [guessesRemaining, setGuessesRemaining] = useState(6)
    // const [nextLetter, setNextLetter] = useState(0)
    // const [currentGuess, setCurrentGuess] = useState<string[]>([])
    // const [rightGuessString, setRightGuessString] = useState<string>("")

    // const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
        
    //     if (guessesRemaining === 0) {
    //         return
    //     }
        
    //     let pressedKey = String(event.key)

    //     if (pressedKey === "Backspace" && nextLetter !== 0) {
    //         deleteLetter();
    //             return;
    //     }
        
    //     if (pressedKey === "Enter") {
    //         checkGuess();
    //             return;
    //     }

    //     let found = pressedKey.match(/[a-z]/gi)

    //     if (!found || found.length > 1) {
    //         return
    //     } else {
    //         insertLetter(pressedKey)
    //     }
    // };

    // function insertLetter(pressedKey: string) {
    //     if (nextLetter === 5) {
    //         return;
    //     }
    //     setBoard(board.map((row, index) => 
    //         index === 6 - guessesRemaining
    //     ?
    //     row.map((letter, index) => {
    //         if(index === nextLetter) {
    //             return {
    //                 "value": pressedKey,
    //                 "color": letter.color
    //             }
    //         } return letter
    //     })
    //     :
    //     row)
    //     )
    //     setCurrentGuess(currentGuess => [...currentGuess, pressedKey])
    //     setNextLetter(nextLetter + 1)
    // }

    // function deleteLetter() {
    //     setBoard(board.map((row, index) => 
    //       index === 6 - guessesRemaining
    //       ?
    //       row.map((letter, index) => {
    //         if(index === nextLetter - 1) {
    //             return {
    //                 "value": "",
    //                 "color": letter.color
    //             }
    //         } return letter
    //     })
    //       :
    //       row)
    //     )
    //     setCurrentGuess(currentGuess.slice(0, currentGuess.length - 1))
    //     setNextLetter(nextLetter - 1)
    // }

    // function checkGuess () {

    //     let guessString = currentGuess.join("")
    //     // let rightGuess = Array.from(rightGuessString)
        
    //     // const lp: number[] = []
    //     // for (let i = 0; i < 5; i++) {
    //     //   lp.push(rightGuess.indexOf(currentGuess[i])) 
    
    //     //   let letterPosition = rightGuess.indexOf(currentGuess[i])
    //     // }
            
    //     if (guessString === rightGuessString) {
    //       setGuessesRemaining(0)
    //       return;
    //     } else {
    //       setGuessesRemaining(guessesRemaining - 1)
    //       setCurrentGuess([])
    //       setNextLetter(0)
    //     }
    // }
    
    // useEffect(() => {}, [board])
    
    // useEffect(() => {
    //   setRightGuessString("whero")
    // }, [])
    
    return (
        <div className="flex justify-center items-center grow overflow-hidden">
            <div className="w-[350px] h-[420px] p-2.5 grid grid-rows-6 gap-[5px] box-border" >
            {board.map((_, index) => {
                return (
                <div className="grid grid-cols-5 gap-[5px]" key={Math.random()}>
                    {board[index]!.map((item, _ind) => {
                        return (
                        <div className={
                        `letter ${item ? "letter-white" : ""}`} key={Math.random()}>{item.value}</div>
                  );
              })}
              </div>
          );
        })}
            </div>
        </div>
    );
  }
  
  export default Board;
