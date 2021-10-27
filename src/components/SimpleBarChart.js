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

// Documentation i used to customize the following component can be found juste right here https://recharts.org/en-US/api/BarChart
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
          <p className="label">{`${payload[1].value * 2}kCal`}</p>
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
        <svg height="50px">
          <text y="13">Activité quotidienne</text>
        </svg>
        <ul className="bar-legend">
          {payload.map((entry, index) => (
            <li style={{ color }} key={`${index++}`}>
              <span className="dot"></span>
              <p className="legend-tag">{entry.value}</p>
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
          dataKey="kg"
          tickSize="0"
          tickMargin="50"
          stroke="#9B9EAC"
          orientation="right"
          type="number"
          interval="preserveStartEnd"
          scale="sqrt"
          domain={["dataMin-60", "dataMax+140"]}
          padding={{ top: 15, bottom: -5 }}
          tickCount={4}
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
