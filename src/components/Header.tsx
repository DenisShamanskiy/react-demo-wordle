import { useAppDispatch, useAppSelector } from "hook";
import { activeModal } from "store/modalSlice";
// import { toggleTheme } from "store/themeSlice";
import ButtonIcon from "./micro-components/Button/ButtonIcon";
import reload from "../icon/reload-outline.svg";
import reloadDark from "../icon/reload-outline-dark.svg";
import help from "../icon/help-outline.svg";
import helpDark from "../icon/help-outline-dark.svg";
import stats from "../icon/stats-chart.svg";
import statsDark from "../icon/stats-chart-dark.svg";
import cog from "../icon/cog-outline.svg";
import cogDark from "../icon/cog-outline-dark.svg";
// import InputSwitch from "./micro-components/InputSwitch";

const Header = () => {
  const dispatch = useAppDispatch();

  const board = useAppSelector((state) => state.board.board);
  const { active } = useAppSelector((state) => state.hardMode.hardModeSlice);

  const dark = useAppSelector((state) => state.theme.darkThemeSlice);

  // const darkTheme = useAppSelector((state) => state.theme.darkThemeSlice);

  return (
    <header
      className={`${
        dark
          ? "border-wordleTone4Dark text-wordleWhite"
          : "border-wordleTone4 text-wordleQuartz"
      } w-full h-10 sm:h-[65px] px-4 md:px-5 border-b flex justify-between items-center box-border select-none`}
    >
      <ButtonIcon
        onClick={() => dispatch(activeModal({ open: true, window: "Rules" }))}
        style={{ backgroundImage: `url(${dark ? helpDark : help})` }}
      />
      <div className="relative w-full h-full ml-4 md:ml-[98px] mr-2 flex justify-center items-center">
        <h1 className="grow-[2] text-left md:text-center text-[28px] md:text-[32px] lg:text-[36px] font-['Bitter'] font-black leading-[64px]">
          Wordle
        </h1>
        {/* <InputSwitch
          onChange={() => dispatch(toggleTheme())}
          isChecked={darkTheme}
        /> */}
        {active && (
          <p className="absolute right-0 h-7 md:h-8 px-2 align-middle text-[12px] md:text-[14px] font-extrabold text-red-500 uppercase leading-[26px] md:leading-[30px]">
            Hard Mode
          </p>
        )}
      </div>
      <div className="flex justify-end items-center">
        <ButtonIcon
          onClick={() =>
            dispatch(activeModal({ open: true, window: "NewGame" }))
          }
          style={{
            backgroundImage: `url(${dark ? reloadDark : reload})`,
            marginRight: "8px",
          }}
          disabled={board[0]?.every((item) => item.color === "")}
        />
        <ButtonIcon
          onClick={() => dispatch(activeModal({ open: true, window: "Stats" }))}
          style={{
            backgroundImage: `url(${dark ? statsDark : stats})`,
            marginRight: "8px",
          }}
        />
        <ButtonIcon
          onClick={() =>
            dispatch(activeModal({ open: true, window: "Settings" }))
          }
          style={{ backgroundImage: `url(${dark ? cogDark : cog})` }}
        />
      </div>
    </header>
  );
};

export default Header;
