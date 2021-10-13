import * as React from "react";
import { LineChart, Line, Legend, XAxis, Tooltip } from "recharts";
import Data from "../data/data";
import "../styles/TinyLineChart.scss";

export default function TinyLineChart() {
  let weekDays = ["L", "M", "M", "J", "V", "S", "D"];
  let newDataArray = [];
  let sessions = Data.USER_AVERAGE_SESSIONS[0].sessions;
  sessions.forEach((element, index) => {
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
    const opacity = "60%";
    return <span style={{ color, opacity }}>Durée moyenne des sessions</span>;
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="linechart-tooltip">
          <p className="label">{`${payload[0].value} mn`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <LineChart
      className="sessions-length"
      width={260}
      height={270}
      data={newDataArray}
      margin={{
        top: 50,
        right: 20,
        left: 20,
        bottom: 58,
      }}
      interval="preserveStartEnd"
    >
      <Legend
        height={70}
        width={200}
        align="left"
        verticalAlign="top"
        iconSize="0"
        margin="0"
        formatter={newLegend}
      />
      <XAxis
        axisLine={false}
        tickLine={false}
        dataKey="name"
        stroke="white"
        tickMargin="50"
        tick={{ opacity: 0.6 }}
        allowDataOverflow={true}
      />
      <Tooltip
        cursor={{ stroke: "red", strokeWidth: 0 }}
        content={CustomTooltip}
      />
      <Line
        type="natural"
        dataKey="sessionLength"
        stroke="white"
        dot={false}
        strokeWidth={2}
        fill="white"
      />
    </LineChart>
  );
}
