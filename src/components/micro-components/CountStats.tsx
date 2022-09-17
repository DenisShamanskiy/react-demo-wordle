import { dataCountStats } from "utils/data";

interface ICountStatsProps {
  index: number;
  count: number;
}

const CountStats = ({ index, count }: ICountStatsProps) => {
  return (
    <div
      className={`flex flex-col justify-center text-center ${
        dataCountStats[index]!.style
      }`}
    >
      <p className="mb-2 text-3xl font-bold">{count}</p>
      <p className="text-sm font-bold uppercase">
        {dataCountStats[index]!.text}
      </p>
    </div>
  );
};

export default CountStats;
