import { RadialBarChart, RadialBar, Cell, Legend } from "recharts";

const data = [
  { name: "Ankit", value: 89 },
  { name: "Niteen", value: 141 },
  { name: "Abhishek", value: 77 },
  { name: "Akash", value: 50 },
  { name: "Sagar", value: 40 },
  { name: "Bhushan", value: 30 },
];

const colors = ["#8884d8", "#82ca9d", "#ffc658", "#d88884", "#84d8ca", "#d8ca84"];

const Contribution = () => {
  return (
    <div className="contribution" style={{ alignItems: "center", display:"flex" }}>
    <RadialBarChart
      width={400}
      height= {300}
      innerRadius="10%"
      outerRadius="100%"
      data={data}
      startAngle={0}
      endAngle={360}
    >
      <RadialBar
        minAngle={15}
        background
        clockWise
        dataKey="value"
        label={{ position: "insideStart", fill: "#000000" }}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} />
        ))}
      </RadialBar>
    </RadialBarChart>
    </div>
  );
  
};

export default Contribution ;
