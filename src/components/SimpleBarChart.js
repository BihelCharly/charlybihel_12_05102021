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
import "../styles/SimpleBarChart.scss";

export default function SimpleBarChart(props) {
  let newDataArray = [];
  props.activity.forEach((element, index) => {
    const newObject = {
      name: index + 1,
      kg: element.kilogram,
      kCal: element.calories / 2,
    };
    newDataArray.push(newObject);
  });

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="barchart-tooltip" style={{ paddingLeft: `8%` }}>
          <p className="label">{`${payload[0].value}kg`}</p>
          <p className="label">{`${payload[1].value}kCal`}</p>
        </div>
      );
    }
    return null;
  };
  const renderLegend = (props) => {
    const { payload } = props;
    const color = "#74798C";
    return (
      <div className="bar-legend">
        <svg width="auto" height="50px">
          <text x="auto" y="13">
            Activité quotidienne
          </text>
        </svg>
        <ul className="bar-legend">
          {payload.map((entry, index) => (
            <li style={{ color }} key={`${index++}`}>
              {entry.value}
            </li>
          ))}
        </ul>
      </div>
    );
  };

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
          padding={{ left: -40, right: -40 }}
        />
        <YAxis
          axisLine={false}
          dataKey="kCal"
          tickSize="0"
          tickMargin="50"
          stroke="#9B9EAC"
          orientation="right"
          domain={["dataMin", "dataMax-50"]}
          padding={{ top: 20, bottom: 0 }}
          type="number"
          ticks={[60, 80, 90]}
          interval={0}
        />
        <Tooltip content={CustomTooltip} isAnimationActive={true} />
        <Legend
          verticalAlign="top"
          wrapperStyle={{ top: "25px", width: "85%" }}
          layout="horizontal"
          iconSize="50"
          iconType="circle"
          content={renderLegend}
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
