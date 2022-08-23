import { useAppSelector } from "hook";

const Board = () => {
    const board  = useAppSelector(state => state.board.board);

    return (
        <div className="flex justify-center items-center grow overflow-hidden">
            <div className="w-[350px] h-[420px] p-2.5 grid grid-rows-6 gap-[5px] box-border" >
            {board.map((_, index) => {
                return (
                <div className="grid grid-cols-5 gap-[5px]" key={index}>
                    {board[index]!.map((item, ind) => {
                        return (
                        <div className={`letter ${item.value ? "letter-white" : ""} ${item.color ? item.color : ""}`} key={ind}>{item.value}</div>
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
