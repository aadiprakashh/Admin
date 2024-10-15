import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// Updated chart data structure
const chartData = {
  daily: [
    { category: "Converted", value: 3.75 },
    { category: "Not Converted", value: 96.25 },
  ],
  weekly: [
    { category: "Converted", value: 25 },
    { category: "Not Converted", value: 175 },
  ],
  monthly: [
    { category: "Converted", value: 100 },
    { category: "Not Converted", value: 700 },
  ],
};

const COLORS = ["#4BC0C0", "#FF6384"];

const ConversionRateChart = ({ period }) => {
  const data = chartData[period];

  // Calculate total converted and not converted values
  const converted =
    data.find((item) => item.category === "Converted")?.value || 0;
  const notConverted =
    data.find((item) => item.category === "Not Converted")?.value || 0;

  // Calculate conversion rate percentage
  const total = converted + notConverted;
  const conversionRate = total ? ((converted / total) * 100).toFixed(2) : 0;

  return (
    <div
      className="card col-md-3  d-flex flex-column justify-content-evenly"
      //  style={{height:'500px'}}
    >
      <div className="card-body">
        <h5 className="card-title">Conversion Rate</h5>
        {/* <div className="d-flejustify-content-center align-items-center"> */}
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="card-text px-2 pt-5"
          //  style={{ width: "350px" }}
           >
            <p>
              <strong>Conversion Rate:</strong> {conversionRate}%
            </p>
            <p>
              <strong>Converted:</strong> {converted}
            </p>
            <p>
              <strong>Not Converted:</strong> {notConverted}
            </p>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default ConversionRateChart;
