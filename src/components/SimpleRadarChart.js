import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import Data from "../data/data";
import "../styles/SimpleRadarChart.scss";

export default function SimpleRadarChart() {
  let newDataArray = [];
  let performances = Data.USER_PERFORMANCE[0].data;
  let kind = Data.USER_PERFORMANCE[0].kind;
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
    <RadarChart
      className="sessions-performances"
      outerRadius={85}
      width={270}
      height={270}
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
  );
}
