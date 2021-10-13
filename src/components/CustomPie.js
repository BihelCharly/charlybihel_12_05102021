import React from "react";
import { PieChart, Pie, Cell, Legend, Label } from "recharts";
import Data from "../data/data";
import "../styles/CustomPie.scss";

export default function CustomPie() {
  let score = Data.USER_MAIN_DATA[0].todayScore * 100;

  const data = [
    { name: "Score", value: score },
    { name: "Total", value: 100 - score },
  ];
  const colors = ["red", "transparent"];

  const renderLegend = () => {
    return <p className="piechart-legend">{data[0].name}</p>;
  };

  function CustomLabel({ viewBox, value1, value2 }) {
    const { cx, cy } = viewBox;
    return (
      <>
        <text
          x={cx}
          y={cy - 5}
          fill="black"
          className="recharts-text recharts-label"
          textAnchor="middle"
          dominantBaseline="central"
        >
          <tspan alignmentBaseline="middle" fontSize="35px">
            {value1}
          </tspan>
        </text>
        <text
          x={cx}
          y={cy + 20}
          fill="#74798C"
          className="recharts-text recharts-label"
          textAnchor="middle"
          dominantBaseline="central"
        >
          <tspan fontSize="12.3px">{value2}</tspan>
        </text>
      </>
    );
  }

  return (
    <PieChart width={260} height={270}>
      <Legend align="left" verticalAlign="top" content={renderLegend} />
      <Pie
        data={data}
        cx="50%"
        cy="40%"
        innerRadius={90}
        outerRadius={105}
        startAngle={90}
        endAngle={450}
        paddingAngle={0}
        dataKey="value"
        label={false}
      >
        <Label
          position="center"
          content={
            <CustomLabel
              value1={data[0].value + "%"}
              value2="de votre objectif"
            />
          }
        ></Label>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
