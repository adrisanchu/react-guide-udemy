import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  // initialize data to 0 for each month
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  // update data for each month by looping through each month
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 for January!
    // monthly sum
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  // finally, return the Chart component with the new data as props
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
