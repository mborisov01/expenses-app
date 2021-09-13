import React from "react";
import ChartBar from "./ChartBar.js";

import "./Chart.css";

const Chart = (props) => {
    console.log('charts', props)
  const dataChartValue = props.dataChart.map((data) => data.value);
  const totalMax = Math.max(...dataChartValue);

  return (
    <div className="chart">
      {props.dataChart.map((dataCharts) => (
        <ChartBar
          key={dataCharts.label}
          value={dataCharts.value}
          maxValue={totalMax}
          label={dataCharts.label}
        />
      ))}
    </div>
  );
};

export default Chart;
