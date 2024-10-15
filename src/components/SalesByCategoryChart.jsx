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

import { salesByCategoryData } from "../data";

const SalesByCategoryChart = ({ period }) => {
  const data = salesByCategoryData[period];

  // Calculate top category, bottom product, and sales distribution
  const { topCategory, bottomCategory, salesDistribution } = useMemo(() => {
    if (!data || data.length === 0) {
      return {
        topCategory: "N/A",
        bottomCategory: "N/A",
        salesDistribution: [],
      };
    }

    // Sort data to find top and bottom categories
    const sortedData = [...data].sort((a, b) => b.sales - a.sales);
    const topCategory = sortedData[0] || { category: "N/A", sales: 0 };
    const bottomCategory = sortedData[sortedData.length - 1] || {
      category: "N/A",
      sales: 0,
    };

    // Calculate total sales
    const totalSales = data.reduce((acc, item) => acc + item.sales, 0);

    // Calculate sales distribution as percentages
    const distribution = data.map((item) => ({
      category: item.category,
      percentage: ((item.sales / totalSales) * 100).toFixed(2),
      sales: item.sales,
    }));

    return {
      topCategory: topCategory.category,
      bottomCategory: bottomCategory.category,
      salesDistribution: distribution,
    };
  }, [data]);

  const highestPercentage = Math.max(
    ...salesDistribution.map((item) => parseFloat(item.percentage))
  );
  const lowestPercentage = Math.min(
    ...salesDistribution.map((item) => parseFloat(item.percentage))
  );



  return (
    <div className="card col-md-5" >
      <div className="card-body">
        <h5 className="card-title">Sales by Category</h5>
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" hide />
              <YAxis hide />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="rgba(54, 162, 235, 1)"
                strokeWidth={3}
                dot={{
                  r: 5,
                  stroke: "rgba(255, 99, 132, 1)",
                  strokeWidth: 3,
                  fill: "rgba(255, 99, 132, 0.6)",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="card-text d-flex align-items-center justify-content-between">
          <p>
            <strong>Top Category:</strong> {topCategory} | {highestPercentage}%
          </p>
          <p>
            <strong>Bottom Category:</strong> {bottomCategory} | {lowestPercentage}%
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default SalesByCategoryChart;
