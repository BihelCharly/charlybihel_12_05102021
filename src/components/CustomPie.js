import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import "../styles/CustomPie.scss";

const data = [
  { name: "Group A", value: 60 },
  { name: "Group B", value: 40 },
];
const COLORS = ["red", "white"];

export default function CustomPie() {
  const newLegend = () => {
    const color = "black";
    return <span style={{ color }}>Score</span>;
  };
  return (
    <PieChart width={260} height={270}>
      <text
        x={100}
        y={120}
        dy={10}
        textAnchor="middle"
        fill="black"
        fontSize="10"
      >
        {data[0].name + "% </br> de votre objectif"}
      </text>
      <Legend
        width={130}
        align="left"
        verticalAlign="top"
        iconSize="0"
        margin="0"
        formatter={newLegend}
      />
      <Pie
        data={data}
        cx={105}
        cy={105}
        innerRadius={90}
        outerRadius={105}
        startAngle={90}
        endAngle={450}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
        label={false}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
