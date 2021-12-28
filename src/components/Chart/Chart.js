import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // extract values from dataPoint object
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // calculate the maximum from a list of values
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
