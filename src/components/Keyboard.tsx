import { useAppSelector } from "hook";

type KeyboardProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Keyboard = ( {handleClick}: KeyboardProps) => {

  const keyBoard  = useAppSelector(state => state.keyBoard.keyBoard);

    return (
      <div className="block h-[200px] mx-2 select-none">
        {keyBoard.map((_, indexRow) => {
          return (
            <div className="flex w-full mt-0 mb-2 mx-auto touch-manipulation" key={indexRow}>
              {keyBoard[indexRow]!.map((item, indexKey) => {
                return (
                  <button type="button" data-key={item.value} className={`button-key ${indexRow === 2 && indexKey === 0 && "flex-auto"} ${indexRow === 2 && indexKey === 10 && "flex-auto"} ${item.color ? item.color : "bg-[#d3d6da] text-[#000000]"}`} onClick={handleClick} key={indexKey}>{item.value.toUpperCase()}</button>
                  );
              })}
            </div>
          );
        })}
      </div>
    );
    
  }
  
  export default Keyboard;