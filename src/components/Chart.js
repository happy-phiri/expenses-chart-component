import React from "react";

const Chart = (props) => {
  const amounts = props.data.map((expense) => expense.amount);
  const max = Math.max.apply(null, amounts);
  console.log(max);

  return (
    <div className="chart">
      <h2>Spending - Last 7 days</h2>

      <div className="bar-chart">
        {props.data.map((expense) => {
          console.log(expense.amount);
          const styles = {
            height: `${expense.amount}%`,
            backgroundColor: `${
              expense.amount === max
                ? "hsl(186, 34%, 60%)"
                : "hsl(10, 79%, 65%)"
            }`,
          };

          return (
            <div className="bar" key={props.data.indexOf(expense)}>
              <div className="bar-container">
                <div className="bar-percent" style={styles}>
                  <p className="bar-amount">{`$${expense.amount}`}</p>
                </div>
              </div>
              <p className="bar-day">{expense.day}</p>
            </div>
          );
        })}
      </div>

      <div className="summary">
        <div className="total">
          <p>Total this month</p>
          <h1>$478.33</h1>
        </div>

        <div className="difference">
          <h3>+2.4%</h3>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Chart;
