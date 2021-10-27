import React from "react";
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import "../styles/SimpleRadarChart.scss";

// Documentation i used to customize the following component can be found juste right here https://recharts.org/en-US/api/RadarChart
export default function SimpleRadarChart(props) {
  let newDataArray = [];
  let performances = props.performance.data;
  let kind = props.performance.kind;
  performances.forEach((element, index) => {
    let activities = Object.values(kind);
    const newObject = {
      activity: activities[index++],
      kind: element.value,
      fullMark: 150,
    };
    newDataArray.push(newObject);
  });

  return (
    <ResponsiveContainer width="33%" height="100%">
      <RadarChart
        className="sessions-performances"
        outerRadius={85}
        data={newDataArray}
        cx="50%"
        cy="50%"
      >
        <PolarGrid stroke="white" radialLines={false} />
        <PolarAngleAxis
          dataKey="activity"
          stroke="white"
          fontSize="10"
          tickLine={false}
        />
        <PolarRadiusAxis tick={false} axisLine={false} />
        <Radar dataKey="kind" stroke="red" fill="red" fillOpacity={0.65} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
