import { useState } from "react";
import { convertData } from "../../helpers/convertData";
import styles from "./Chart.module.css";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, YAxis } from "recharts";
const Chart = ({ chart, setChart }) => {
  const [type, setType] = useState("prices");
  console.log(convertData(chart, type));
  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.graph}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={400}
              height={400}
              data={convertData(chart, type)}
            >
              <CartesianGrid stroke="#404042" />
              <YAxis dataKey={type} domain={["auto","auto"]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey={type}
                stroke="#3874ff"
                strokeWidth="2px"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Chart;
