import { useAppSelector } from "hook";

const Alert = () => {
  const alert = useAppSelector((state) => state.alert.alertSlice);
  const dark = useAppSelector((state) => state.theme.darkThemeSlice);

  const getColorBg = (color: string) => {
    switch (color) {
      case "green":
        return `${
          dark
            ? "bg-wordleGreenDark text-wordleBlack"
            : "bg-green-100 text-green-800"
        }`;
      case "yellow":
        return `${
          dark
            ? "bg-wordleYellowDark text-wordleBlack"
            : "bg-yellow-100 text-yellow-800"
        }`;
      default:
        return "";
    }
  };

  return (
    <div
      className={`${getColorBg(
        alert.color
      )} absolute h-0 top-[40px] sm:top-[65px] left-0 right-0 rounded-b-xl flex flex-row justify-center items-center text-xs sm:text-base font-extrabold uppercase transition-all duration-500 delay-150 opacity-0 ${
        alert.color
      }    ${alert.open && "h-[41px] sm:h-[65px] opacity-100"}`}
      role="alert"
    >
      {alert.message}
    </div>
  );
};

export default Alert;
