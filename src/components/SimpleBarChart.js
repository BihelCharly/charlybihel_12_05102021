import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Data from "../data/data";
import "../styles/SimpleBarChart.scss";

export default function SimpleBarChart() {
  let newDataArray = [];
  let sessions = Data.USER_ACTIVITY[0].sessions;
  sessions.forEach((element, index) => {
    const newObject = {
      name: index + 1,
      kg: element.kilogram * 3,
      kCal: element.calories,
    };
    newDataArray.push(newObject);
  });

  const newLegend = (entry) => {
    const color = "#74798C";
    return <span style={{ color }}>{entry}</span>;
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="barchart-tooltip" style={{ paddingLeft: `8%` }}>
          <p className="label">{`${payload[1].value}kg`}</p>
          <p className="label">{`${payload[0].value}kCal`}</p>
        </div>
      );
    }
    return null;
  };

  const customYaxis = (value) => `${"test"}%`;

  return (
    <ResponsiveContainer width="100%" height="90%">
      <BarChart
        barSize={8}
        data={newDataArray}
        margin={{
          top: 50,
          right: 50,
          left: 40,
          bottom: 45,
        }}
      >
        <text x="5%" y="10%" fill="black" fontSize="15">
          {"Activité quotidienne"}
        </text>
        <CartesianGrid
          vertical={false}
          stroke="#DEDEDE"
          strokeDasharray="3 3"
        />
        <XAxis
          allowDataOverflow={true}
          dataKey="name"
          tickSize="0"
          tickMargin="30"
          stroke="#9B9EAC"
          padding={{ left: -44, right: -44 }}
        />
        <YAxis
          axisLine={false}
          dataKey="kCal"
          tickSize="0"
          tickMargin="50"
          stroke="#9B9EAC"
          orientation="right"
          domain={["dataMin - 100", "dataMax "]}
          padding={{ top: 30, bottom: 0 }}
          tickFormatter={customYaxis}
        />
        <Tooltip content={CustomTooltip} isAnimationActive={true} />
        <Legend
          align="right"
          verticalAlign="top"
          iconType="circle"
          iconSize={7}
          formatter={newLegend}
        />
        <Bar
          name="Poids (kg)"
          dataKey="kg"
          fill="#282D30"
          radius={[5, 5, 0, 0]}
        />
        <Bar
          name="Calories brûlées (kCal)"
          dataKey="kCal"
          fill="red"
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
