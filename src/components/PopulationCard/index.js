import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PopulationCard = (props) => {
  const { data } = props;
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 20,
          left: 30,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Year" tick={{ fill: "#636acf", fontWeight: "bold" }} />
        <YAxis tick={{ fill: "#636acf", fontWeight: "bold" }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Population" fill="#42f545" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PopulationCard;
