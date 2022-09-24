import { useAppSelector } from "hook";

interface IExampleWordProps {
  index: number;
  letter: string;
  row: number;
}

const ExampleWord = ({ index, letter, row }: IExampleWordProps) => {
  const dark = useAppSelector((state) => state.theme.darkThemeSlice);
  const getColorLetter = (row: number) => {
    switch (row) {
      case 0:
        return `border-0 text-wordleWhite ${
          dark ? "bg-wordleGreenDark" : "bg-wordleGreen"
        }`;
      case 1:
        return `border-0 text-wordleWhite ${
          dark ? "bg-wordleYellowDark" : "bg-wordleYellow"
        }`;
      case 2:
        return `border-0 text-wordleWhite ${
          dark ? "bg-wordleGreyDark" : "bg-wordleGrey"
        }`;
      default:
        return "";
    }
  };

  return (
    <div
      className={`w-9 h-9 mr-1 last-of-type:mr-0 inline-flex justify-center items-center font-['Bitter'] text-2xl font-extrabold uppercase box-border ${
        index !== row
          ? `border-2 ${
              dark
                ? "border-2 border-wordleTone3Dark text-wordleWhite"
                : "border-2 border-wordleTone3 text-wordleQuartz"
            }`
          : getColorLetter(row)
      }`}
      key={index}
    >
      {letter}
    </div>
  );
};

export default ExampleWord;
