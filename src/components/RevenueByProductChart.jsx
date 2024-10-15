import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const chartData = {
  daily: [
    { product: "Wireless Earbuds", revenue: 3500, unitsSold: 140 },
    { product: "Smartwatch X200", revenue: 4800, unitsSold: 120 },
    { product: "Bluetooth Speaker S10", revenue: 2500, unitsSold: 100 },
    { product: "Fitness Tracker Pro", revenue: 2850, unitsSold: 95 },
    { product: "Noise Cancelling Headphones", revenue: 2700, unitsSold: 90 },
  ],
  weekly: [
    { product: "Wireless Earbuds", revenue: 24500, unitsSold: 140 },
    { product: "Smartwatch X200", revenue: 33500, unitsSold: 120 },
    { product: "Bluetooth Speaker S10", revenue: 17500, unitsSold: 100 },
    { product: "Fitness Tracker Pro", revenue: 19900, unitsSold: 95 },
    { product: "Noise Cancelling Headphones", revenue: 18900, unitsSold: 90 },
  ],
  monthly: [
    { product: "Wireless Earbuds", revenue: 98000, unitsSold: 140 },
    { product: "Smartwatch X200", revenue: 134000, unitsSold: 120 },
    { product: "Bluetooth Speaker S10", revenue: 70000, unitsSold: 100 },
    { product: "Fitness Tracker Pro", revenue: 79600, unitsSold: 95 },
    { product: "Noise Cancelling Headphones", revenue: 75600, unitsSold: 90 },
  ],
};

const RevenueByProductChart = ({ period }) => {
  // Prepare data for the chart
  const data = chartData[period].map((item) => ({
    name: item.product,
    value: item.revenue,
  }));

  // Find top and lowest performing products
  const topProduct = chartData[period].reduce(
    (max, current) => (current.revenue > max.revenue ? current : max),
    chartData[period][0]
  );
  const lowestProduct = chartData[period].reduce(
    (min, current) => (current.revenue < min.revenue ? current : min),
    chartData[period][0]
  );

  // Calculate overall insights
  const totalRevenue = chartData[period].reduce(
    (acc, curr) => acc + curr.revenue,
    0
  );
  const averageRevenue = totalRevenue / chartData[period].length;

  return (
    <div className="card col-md-5">
      <div className="card-body">
        <h5 className="card-title">Revenue by Product (Performance)</h5>
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#54A0FF"
                strokeWidth={2}
              />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="card-text">
          <p>
            <strong>Highest:</strong> {topProduct.product} ($
            {topProduct.revenue})
          </p>
          <p>
            <strong>Lowest :</strong> {lowestProduct.product}{" "}
            ($
            {lowestProduct.revenue})
          </p>
          {/* <p>
            <strong>Overall Insights:</strong> The chart illustrates how revenue
            is distributed across different products. The top-performing product
            is {topProduct.product} with a revenue of ${topProduct.revenue},
            while the lowest-performing product is {lowestProduct.product} with
            a revenue of ${lowestProduct.revenue}. The average revenue across
            all products is ${averageRevenue.toFixed(2)}.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default RevenueByProductChart;
