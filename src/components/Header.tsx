import { useAppDispatch, useAppSelector } from "hook";
import { activeModal } from "store/modalSlice";
import ButtonIcon from "./micro-components/Button/ButtonIcon";
import reload from "../icon/reload-outline.svg";
import help from "../icon/help-outline.svg";
import stats from "../icon/stats-chart.svg";
import cog from "../icon/cog-outline.svg";

const Header = () => {
  const dispatch = useAppDispatch();

  const board = useAppSelector((state) => state.board.board);
  const { active } = useAppSelector((state) => state.hardMode.hardModeSlice);

  return (
    <header className="w-full h-10 sm:h-[65px] px-4 md:px-5 border-b border-wordleBorderLight flex justify-between items-center box-border">
      <ButtonIcon
        onClick={() => dispatch(activeModal({ open: true, window: "Rules" }))}
        style={{ backgroundImage: `url(${help})` }}
      />
      <div className="relative w-full h-full ml-4 md:ml-[98px] mr-2 flex justify-center items-center">
        <h1 className="grow-[2] text-left md:text-center text-[28px] md:text-[32px] lg:text-[36px] font-['Bitter'] font-black leading-[64px]">
          Wordle
        </h1>
        {active && (
          <p className="absolute right-0 h-7 md:h-8 px-2 rounded border border-red-500 align-middle text-[12px] md:text-[14px] font-extrabold text-red-500 uppercase leading-[26px] md:leading-[30px]">
            Hard Mode
          </p>
        )}
      </div>
      <div className="flex justify-end items-center">
        <ButtonIcon
          onClick={() =>
            dispatch(activeModal({ open: true, window: "NewGame" }))
          }
          style={{ backgroundImage: `url(${reload})`, marginRight: "8px" }}
          disabled={board[0]?.every((item) => item.color === "")}
        />
        <ButtonIcon
          onClick={() => dispatch(activeModal({ open: true, window: "Stats" }))}
          style={{ backgroundImage: `url(${stats})`, marginRight: "8px" }}
        />
        <ButtonIcon
          onClick={() =>
            dispatch(activeModal({ open: true, window: "Settings" }))
          }
          style={{ backgroundImage: `url(${cog})` }}
        />
      </div>
    </header>
  );
};

export default Header;
