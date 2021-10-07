import * as React from "react";
import { LineChart, Line, Legend, XAxis } from "recharts";
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
  console.log(newDataArray);

  return (
    <LineChart
      className="sessions-length"
      width={260}
      height={270}
      data={newDataArray}
    >
      <Legend
        width={260}
        wrapperStyle={{
          top: -20,
          right: 0,
          backgroundColor: "white",
          borderRadius: 3,
          lineHeight: "5px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "right",
        }}
      />
      <XAxis dataKey="name" />
      <Line
        type="basis"
        dataKey="sessionLength"
        stroke="white"
        dot={false}
        strokeWidth={3}
        fill="white"
      />
    </LineChart>
  );
}
