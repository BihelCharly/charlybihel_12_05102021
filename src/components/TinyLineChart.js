import * as React from "react";
import {
  LineChart,
  Line,
  Legend,
  XAxis,
  Tooltip,
  ReferenceLine,
} from "recharts";
import Data from "../data/data";
import "../styles/TinyLineChart.scss";

export default function TinyLineChart() {
  let newDataArray = [];
  let sessions = Data.USER_AVERAGE_SESSIONS[0].sessions;
  sessions.forEach((element, index) => {
    let weekDays = ["L", "M", "M", "J", "V", "S", "D"];
    const newObject = {
      name: weekDays[index++],
      day: element.day,
      sessionLength: element.sessionLength,
      amt: element.sessionLength,
    };
    newDataArray.push(newObject);
  });

  const newLegend = () => {
    const color = "white";
    const opacity = "70%";
    return <span style={{ color, opacity }}>Durée moyenne des sessions</span>;
  };

  return (
    <LineChart
      className="sessions-length"
      width={260}
      height={270}
      data={newDataArray}
    >
      <Legend
        width={200}
        align="left"
        verticalAlign="top"
        iconSize="0"
        margin="0"
        formatter={newLegend}
      />
      <XAxis dataKey="name" stroke="white" tickSize="0" tickMargin="15" />
      <ReferenceLine y={0} stroke="red" />
      <Tooltip
        cursor={{ stroke: "red", strokeWidth: 0 }}
        contentStyle={{
          backgroundColor: "white",
          borderColor: "white",
          color: "black",
          width: 30,
          height: 20,
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          fontSize: 8,
        }}
        itemStyle={{ color: "black" }}
        labelStyle={{ display: "none" }}
      />
      <Line
        type="monotone"
        dataKey="sessionLength"
        stroke="white"
        dot={false}
        strokeWidth={3}
        fill="white"
      />
    </LineChart>
  );
}
