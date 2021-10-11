import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
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
      amt: element.kilogram,
    };
    newDataArray.push(newObject);
  });

  return (
    <BarChart
      width={850}
      height={320}
      barGap={-40}
      maxBarSize={9}
      data={newDataArray}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="2 3" vertical={false} stroke="#DEDEDE" />
      <XAxis
        dataKey="name"
        tickSize="0"
        tickMargin="30"
        stroke="#9B9EAC"
        height={100}
      />
      <YAxis
        dataKey="kg"
        orientation="right"
        tickSize="0"
        tickMargin="30"
        stroke="#9B9EAC"
        width={50}
      />
      <ReferenceLine y={0} stroke="#DEDEDE" />
      <Tooltip
        contentStyle={{
          backgroundColor: "red",
          borderColor: "red",
          color: "white",
          width: 50,
          height: 100,
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          fontSize: 9,
        }}
        itemStyle={{ color: "white" }}
        labelStyle={{ display: "none" }}
      />
      <Legend
        width={500}
        align="right"
        verticalAlign="top"
        iconType="circle"
        iconSize={8}
      />
      <Bar name="Poids (kg)" dataKey="kg" fill="black" height={5} />
      <Bar name="Calories brûlées (kCal)" dataKey="kCal" fill="red" />
    </BarChart>
  );
}
