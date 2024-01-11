"use client";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
// const data = [
//   { timestamp: "2024-9-1 15:03:01", bpm: 100 },
//   { timestamp: "2024-9-1 15:05:47", bpm: 95 },
//   { timestamp: "2024-9-1 15:10:12", bpm: 110 },
//   { timestamp: "2024-9-1 15:13:21", bpm: 109 },
// ];
interface Props {
  data: any[];
  xKey: string;
  yKey: string;
}
export default function Chart({ data, xKey, yKey }: Props) {
  return (
    <LineChart data={data} width={800} height={500}>
      <Line dataKey={xKey} type={"monotone"} stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey={yKey} />
      <YAxis />
    </LineChart>
  );
}
