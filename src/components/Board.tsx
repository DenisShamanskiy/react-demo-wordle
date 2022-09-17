import { useAppSelector } from "hook";

const Board = () => {

    const board = useAppSelector(state => state.board.board);

    return (
        <div className="flex justify-center items-center grow overflow-hidden font-['Bitter'] select-none">
            <div className="w-[350px] h-[420px] p-2.5 grid grid-rows-6 gap-[5px] font-extrabold uppercase box-border" >
            {board.map((_, indexRow) => {
                return (
                <div className="grid grid-cols-5 gap-[5px] text-[2rem]" key={indexRow}>
                    {board[indexRow]!.map((letter, indexLetter) => {
                        return (
                        <div className={`letter ${letter.value && "letter-white"} ${letter.color && letter.color}`} key={indexLetter}>{letter.value}</div>
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
