import * as React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  XAxis,
  Tooltip,
} from "recharts";
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
    <ResponsiveContainer width="33%" height="100%">
      <LineChart
        className="sessions-length"
        data={newDataArray}
        margin={{
          top: 40,
          right: 15,
          left: 15,
          bottom: 60,
        }}
        interval="preserveStartEnd"
      >
        <Legend
          width="70%"
          align="left"
          verticalAlign="top"
          iconSize="0"
          formatter={newLegend}
        />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="name"
          stroke="white"
          tickMargin="45"
          tick={{ opacity: 0.6 }}
        />
        <Tooltip cursor={{ strokeWidth: 0 }} content={CustomTooltip} />
        <Line
          type="natural"
          dataKey="sessionLength"
          dot={false}
          strokeWidth={2}
          stroke="url(#gradient)"
        />
        <defs>
          <linearGradient id="gradient">
            <stop offset="10%" stopColor="white" stopOpacity="0.4" />
            <stop offset="30%" stopColor="white" stopOpacity="0.5" />
            <stop offset="60%" stopColor="white" stopOpacity="0.7" />
            <stop offset="80%" stopColor="white" stopOpacity="0.9" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>
        </defs>
      </LineChart>
    </ResponsiveContainer>
  );
}
