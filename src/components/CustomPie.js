import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Label,
} from "recharts";
import "../styles/CustomPie.scss";

// Documentation i used to customize the following component can be found juste right here https://recharts.org/en-US/api/PieChart
export default function CustomPie(props) {
  const score = props.score * 100;
  const total = 100 - score;

  const data = [
    { name: "Score", value: score },
    { name: "Total", value: total },
  ];
  const colors = ["red", "#FBFBFB"];

  const renderLegend = () => {
    return (
      <p className="piechart-legend" style={{ paddingLeft: `7%` }}>
        {data[0].name}
      </p>
    );
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
    <ResponsiveContainer width="33%" height="100%">
      <PieChart>
        <Legend align="left" verticalAlign="top" content={renderLegend} />
        <circle cx="50%" cy="51.6%" fill="white" r="33%"></circle>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="40%"
          label={false}
          cornerRadius={50}
          innerRadius={88}
          outerRadius={97}
          startAngle={90}
          endAngle={450}
          paddingAngle={0}
          stroke=""
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
    </ResponsiveContainer>
  );
}
