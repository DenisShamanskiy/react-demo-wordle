interface IExampleWordProps {
  index: number;
  letter: string;
  row: number;
}

const ExampleWord = ({ index, letter, row }: IExampleWordProps) => {
  const getColorLetter = (row: number) => {
    switch (row) {
      case 0:
        return "letter-green";
      case 1:
        return "letter-yellow";
      case 2:
        return "letter-grey";
      default:
        return "";
    }
  };

  return (
    <div
      className={`w-9 h-9 mr-1 last-of-type:mr-0 font-['Bitter'] text-2xl font-extrabold uppercase box-border letter ${
        index !== row ? "letter-white" : getColorLetter(row)
      }`}
      key={index}
    >
      {letter}
    </div>
  );
};

export default ExampleWord;
