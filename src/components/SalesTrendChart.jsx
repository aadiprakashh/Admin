// SalesTrendChart.js
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
import { chartData } from "../data"; // Import from the data file

const SalesTrendChart = ({ period }) => {
  const data = chartData[period];

  const { totalSales, avgSales, peakSales, lowestSales } = useMemo(() => {
    const totalSales = data.reduce((acc, item) => acc + item.sales, 0);
    const avgSales = (totalSales / data.length).toFixed(2);
    const peakSales = Math.max(...data.map((item) => item.sales));
    const lowestSales = Math.min(...data.map((item) => item.sales));

    return { totalSales, avgSales, peakSales, lowestSales };
  }, [data]);

  return (
    <div class="card col-md-3"
    //  style={{ width: "300px" }}
     >
      <div class="card-body">
        <h5 class="card-title">Trending Sales</h5>

        {/* <div className="d-flex align-items-center gap-4"> */}
          <div class="chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" hide />
                <YAxis hide />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="card-text "
         
          // style={{width:'350px'}}
          >
            <p>
              <strong>Total Sales:</strong> ₹{totalSales}
            </p>
            <p>
              <strong>Average Sales:</strong> ₹{avgSales}
            </p>
            <p>
              <strong>Peak Sales:</strong> ₹{peakSales}
            </p>
            <p>
              <strong>Lowest Sales:</strong> ₹{lowestSales}
            </p>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default SalesTrendChart;
