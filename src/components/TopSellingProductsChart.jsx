import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { topSellingProductsData } from '../data'; // Import from data file

const TopSellingProductsChart = ({ period }) => {
  const data = topSellingProductsData[period];

  // Calculate the top product and units sold
  const { topProduct, topUnitsSold, bottomProduct, bottomUnitsSold } =
    useMemo(() => {
      const sortedData = [...data].sort((a, b) => b.unitsSold - a.unitsSold);
      const topProduct = sortedData[0] || {};
      const bottomProduct = sortedData[sortedData.length - 1] || {
        category: "N/A",
        sales: 0,
      };
      return {
        topProduct: topProduct.product || "N/A",
        topUnitsSold: topProduct.unitsSold || 0,
        bottomProduct: bottomProduct.product || "N/A",
        bottomUnitsSold: bottomProduct.unitsSold || 0,
      };
    }, [data]);

  // const highest = Math.max(...data.map((item) => item.unitsSold));
  // const lowest = Math.min(...data.map((item) => item.unitsSold));

  // const filteredData = data.filter(
  //   (item) => item.unitsSold === highest || item.unitsSold === lowest
  // );
  return (
    <div class="card col-md-6" 
    // style={{ width: "450px" }}
    >
      <div class="card-body">
        <h5 class="card-title">Top Selling Products</h5>
        <div class="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="product" hide />
              <YAxis hide />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="unitsSold"
                stroke="rgba(75, 192, 192, 1)"
                strokeWidth={2}
                dot={{
                  r: 4,
                  stroke: "rgba(75, 192, 192, 1)",
                  strokeWidth: 2,
                  fill: "rgba(75, 192, 192, 0.2)",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="card-text d-flex align-items-center justify-content-between">
          <p>
            <strong>Top Product:</strong> {topProduct} | {topUnitsSold} units
          </p>
          <p>
            <strong>Bottom Product:</strong> {bottomProduct} | {bottomUnitsSold}  units
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopSellingProductsChart;
