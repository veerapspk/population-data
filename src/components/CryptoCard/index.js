import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts";

const CryptoCard = (props) => {
  const { pricesData } = props;
  const modifiedData = Object.entries(pricesData).map((each) => ({
    ...each[1],
  }));
  let l = 0;
  const data = modifiedData.map((each) => {
    const colors = ["violet", "yellow", "orange"];

    const color = colors[l];
    l++;
    console.log(color);
    return {
      name: each.code,
      color,
      value: each.rate_float,
    };
  });

  console.log(modifiedData);
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={70}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CryptoCard;
