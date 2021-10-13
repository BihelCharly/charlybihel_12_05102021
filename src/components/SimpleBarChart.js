import React from "react";
import {
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
      kCal: element.calories,
      kg: element.kilogram,
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
        <div className="barchart-tooltip">
          <p className="label">{`${payload[1].value}kg`}</p>
          <p className="label">{`${payload[0].value}kCal`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <BarChart
      width={835}
      height={320}
      barGap={-30}
      barSize={9}
      data={newDataArray}
      margin={{
        top: 15,
        right: 30,
        left: 25,
        bottom: 35,
      }}
    >
      <text x={20} y={30} fill="black" fontSize="15">
        {"Activité quotidienne"}
      </text>
      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#DEDEDE" />
      <XAxis
        allowDataOverflow={true}
        dataKey="name"
        tickSize="0"
        tickMargin="30"
        stroke="#9B9EAC"
        scale="point"
        padding={{ left: 17, right: 16 }}
      />
      <YAxis
        padding={{ top: 60, bottom: 0 }}
        axisLine={false}
        dataKey="kg"
        orientation="right"
        tickSize=""
        tickMargin="25"
        stroke="#9B9EAC"
        type="number"
        domain={["dataMin", "dataMax"]}
        interval={0}
      />
      <Tooltip content={CustomTooltip} />
      <Legend
        align="right"
        verticalAlign="top"
        iconType="circle"
        iconSize={8}
        formatter={newLegend}
      />
      <Bar
        name="Calories brûlées (kCal)"
        dataKey="kCal"
        fill="red"
        radius={[10, 10, 0, 0]}
      />
      <Bar
        name="Poids (kg)"
        dataKey="kg"
        fill="black"
        radius={[10, 10, 0, 0]}
      />
    </BarChart>
  );
}
