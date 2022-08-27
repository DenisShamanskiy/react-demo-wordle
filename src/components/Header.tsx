import { useAppDispatch } from "hook";
import { activeModal } from "store/modalSlice";
import icom from "../icon/redo-circle-outline-icon.svg"

const Header = () => {

  // const board  = useAppSelector(state => state.board.board);

  const dispatch = useAppDispatch();
  
  return (
    <header className="header">
        <h1 className="header__title">Wordle</h1>
        <div className="flex flex-col relative group">
          <button
            type="button"
            className="icon"
            onClick={() => dispatch(activeModal(true))}
            style={{backgroundImage: `url(${icom})`}}
            // disabled={board[0]?.every((item) => item.color === "")}
            >
          </button>
        </div>
    </header>
  );
}

export default Header;
