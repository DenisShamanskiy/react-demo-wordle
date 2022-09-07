import { useAppSelector } from "hook";
import enter from "../icon/key-enter.svg"
import backspace from "../icon/key-backspace.svg"

type KeyboardProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Keyboard = ({handleClick}: KeyboardProps) => {

  const keyBoard  = useAppSelector(state => state.keyBoard.keyBoard);
    return (
      <section className="w-full max-w-lg mx-auto p-2 rounded flex flex-col select-none bg-[#ececec] font-sans">
        {keyBoard.map((_, indexRow) => {
          if (indexRow === 2) {
            return (
              <div className="w-full flex" key={indexRow}>
              <button type="button" data-key="↵" className="button-key bg-no-repeat bg-[#fff] bg-[length:50%] bg-center flex-[1.6_1_0%]" style={{backgroundImage: `url(${enter})`}} onClick={handleClick}>
              </button>
              {keyBoard[indexRow]!.map((buttonKey, indexKey) => {
                return (
                  <button type="button" data-key={buttonKey.value} className={`button-key ${buttonKey.color ? `${buttonKey.color} border-[color:var(--color-border-dark)]` : "bg-[#fff]"}`}
                  onClick={handleClick} key={indexKey}>{buttonKey.value}</button>
                  );
              })}
              <button type="button" data-key="←" className="button-key bg-no-repeat bg-[#fff] bg-[length:50%] bg-center flex-[1.6_1_0%]" style={{backgroundImage: `url(${backspace})`}} onClick={handleClick}> 
              </button>
            </div>
            )
          }
          return (
            <div className="mb-1.5 flex w-full" key={indexRow}>
              {keyBoard[indexRow]!.map((buttonKey, indexKey) => {
                return (
                  <button type="button" data-key={buttonKey.value} className={`button-key ${buttonKey.color ? `${buttonKey.color} border-[color:var(--color-border-dark)]` : "bg-[#fff]"}`}
                  onClick={handleClick} key={indexKey}>{buttonKey.value}</button>
                );
              })}
            </div>
          );
        })}
      </section>
    );
  }
  
export default Keyboard;