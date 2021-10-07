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
      amt: element.kilogram,
    };
    newDataArray.push(newObject);
  });

  return (
    <BarChart
      width={835}
      height={320}
      data={newDataArray}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="0 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip
        wrapperStyle={{
          width: 100,
        }}
      />
      <Legend
        width={500}
        wrapperStyle={{
          top: 0,
          right: 0,
          backgroundColor: "inherit",
          borderRadius: 3,
          lineHeight: "5px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
        }}
      />
      <Bar name="Poids (kg)" dataKey="kg" fill="black" />
      <Bar name="Calories brûlées (kCal)" dataKey="kCal" fill="red" />
    </BarChart>
  );
}
