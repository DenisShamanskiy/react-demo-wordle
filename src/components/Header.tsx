import { useAppDispatch, useAppSelector } from "hook";
import { activeModal } from "store/modalSlice";
import reload from "../icon/reload-outline.svg"
import flag from "../icon/flag-outline.svg"
import help from "../icon/help-outline.svg"
import stats from "../icon/stats-chart.svg"
import alert from "../icon/alert.svg"

const Header = () => {

  const board  = useAppSelector(state => state.board.board);

  const dispatch = useAppDispatch();
  
  return (
    <header className="h-10 sm:h-[65px] px-4 md:px-5 flex items-center border-b border-[color:var(--color-tone-4)]">
    <h1 className="md:ml-[152px] grow-[2] text-[28px] md:text-[32px] lg:text-[36px] font-black text-[color:var(--color-quartz)] tracking-[0.01em] text-left md:text-center pointer-events-none relative leading-none font-['Bitter']">Wordle</h1>
    <div className="flex justify-end items-center">
    <button
        type="button"
        className="flex justify-center items-center mr-2 w-7 h-7 md:w-8 md:h-8 rounded bg-no-repeat bg-center bg-contain disabled:pointer-events-none hover:scale-110 transition duration-300 ease-in-out"
        onClick={() => dispatch(activeModal({open: true, window: "Confirmation", title: "Критическое обновление", description: "Для дальнейшго учета статистики необходимо очистить LocalStorage. Текущая статистика будет удалена."}))}
        style={{backgroundImage: `url(${alert})`}}
        >
      </button>
    <button
        type="button"
        className="flex justify-center items-center mr-2 w-7 h-7 md:w-8 md:h-8 rounded bg-no-repeat bg-center bg-contain disabled:pointer-events-none hover:scale-110 transition duration-300 ease-in-out"
        onClick={() => dispatch(activeModal({open: true, window: "Stats"}))}
        style={{backgroundImage: `url(${stats})`}}
        >
      </button>
      <button
        type="button"
        className="flex justify-center items-center mr-2 w-7 h-7 md:w-8 md:h-8 rounded bg-no-repeat bg-center bg-contain disabled:pointer-events-none disabled:opacity-30 hover:scale-110 transition duration-300 ease-in-out"
        onClick={() => dispatch(activeModal({open: true, window: "Rules"}))}
        style={{backgroundImage: `url(${help})`}}
        >
      </button>
      <button
        type="button"
        className="inline-block mr-2 w-7 h-7 md:w-8 md:h-8 rounded bg-no-repeat bg-center bg-contain disabled:pointer-events-none disabled:opacity-30 hover:scale-110 transition duration-300 ease-in-out"
        onClick={() => dispatch(activeModal({open: true, window: "Confirmation", title: "Сдаёшься?", description: "Поражение засчитано не будет. Игра начнётся сначала с новым словом."}))}
        style={{backgroundImage: `url(${flag})`}}
        disabled={board[0]?.every((item) => item.color === "" ) || board[5]?.every((item) => item.color !== "")}
        >
        </button>
        <button
          type="button"
          className="inline-block w-7 h-7 md:w-8 md:h-8 rounded bg-no-repeat bg-center bg-contain disabled:pointer-events-none disabled:opacity-30 hover:scale-110 transition duration-300 ease-in-out"
          onClick={() => dispatch(activeModal({open: true, window: "Confirmation", title: "Начнём сначала?", description: "Текущий прогресс не сохранится"}))} 
          style={{backgroundImage: `url(${reload})`}}
          disabled={board[0]?.every((item) => item.color === "")}
          > 
        </button>
    </div>
    </header>
  );
}

export default Header;
