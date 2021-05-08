import React from "react";
import ReactDOM from "react-dom";
import { Chart, LineAdvance } from "bizcharts";

const data = [
  {
    month: "Jan",
    type: "温度",
    num: 112,
  },
  {
    month: "Jan",
    type: "湿度",
    num: 123,
  },
  {
    month: "Jan",
    type: "光照",
    num: 165,
  },
  {
    month: "Feb",
    type: "温度",
    num: 96,
  },
  {
    month: "Feb",
    type: "湿度",
    num: 42,
  },
  {
    month: "Feb",
    type: "光照",
    num: 142,
  },
  {
    month: "Mar",
    type: "温度",
    num: 125,
  },
  {
    month: "Mar",
    type: "湿度",
    num: 117,
  },
  {
    month: "Mar",
    type: "光照",
    num: 137,
  },
  {
    month: "Apr",
    type: "温度",
    num: 145,
  },
  {
    month: "Apr",
    type: "湿度",
    num: 85,
  },
  {
    month: "Apr",
    type: "光照",
    num: 85,
  },
  {
    month: "May",
    type: "温度",
    num: 184,
  },
  {
    month: "May",
    type: "湿度",
    num: 119,
  },
  {
    month: "May",
    type: "光照",
    num: 149,
  },
  {
    month: "Jun",
    type: "温度",
    num: 215,
  },
  {
    month: "Jun",
    type: "湿度",
    num: 152,
  },
  {
    month: "Jun",
    type: "光照",
    num: 152,
  },
  {
    month: "Jul",
    type: "温度",
    num: 252,
  },
  {
    month: "Jul",
    type: "湿度",
    num: 17,
  },
  {
    month: "Jul",
    type: "光照",
    num: 17,
  },
  {
    month: "Aug",
    type: "温度",
    num: 265,
  },
  {
    month: "Aug",
    type: "湿度",
    num: 166,
  },
  {
    month: "Aug",
    type: "光照",
    num: 166,
  },
  {
    month: "Sep",
    type: "温度",
    num: 233,
  },
  {
    month: "Sep",
    type: "湿度",
    num: 142,
  },
  {
    month: "Sep",
    type: "光照",
    num: 142,
  },
  {
    month: "Oct",
    type: "温度",
    num: 183,
  },
  {
    month: "Oct",
    type: "湿度",
    num: 103,
  },
  {
    month: "Oct",
    type: "光照",
    num: 143,
  },
  {
    month: "Nov",
    type: "温度",
    num: 139,
  },
  {
    month: "Nov",
    type: "湿度",
    num: 66,
  },
  {
    month: "Nov",
    type: "光照",
    num: 161,
  },
  {
    month: "Dec",
    type: "温度",
    num: 96,
  },
  {
    month: "Dec",
    type: "湿度",
    num: 48,
  },
  {
    month: "Dec",
    type: "光照",
    num: 118,
  },
];

export default function LineChart() {
  return (
    <Chart
      scale={{ num: { min: 0 } }}
      padding={[10, 20, 50, 40]}
      autoFit
      height={220}
      data={data}
      
    >
      <LineAdvance
        point={{ size: 2 }}
        area
        shape="smooth"
        position="month*num"
        color="type"
        
      />
    </Chart>
  );
}