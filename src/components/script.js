import { Chart } from "chart.js";
var ctx = document.getElementById("salesTrendChart").getContext("2d");
var salesTrendChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "2024-09-01",
      "2024-09-02",
      "2024-09-03",
      "2024-09-04",
      "2024-09-05",
      "2024-09-06",
      "2024-09-07",
    ],
    datasets: [
      {
        label: "Sales Trend",
        data: [85, 120, 95, 150, 80, 100, 95],
        backgroundColor: "orangered",
        borderColor: "orange",
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});


 var ctx = document.getElementById("topSellingProductsChart").getContext("2d");
 var topSellingProductsChart = new Chart(ctx, {
   type: "pie",
   data: {
     labels: [
       "Wireless Earbuds",
       "Smartwatch X200",
       "Bluetooth Speaker S10",
       "Fitness Tracker Pro",
       "Noise Cancelling Headphones",
     ],
     datasets: [
       {
         label: "Units Sold",
         data: [140, 120, 100, 95, 90],
         backgroundColor: [
           "rgba(255, 99, 132, 0.2)",
           "rgba(54, 162, 235, 0.2)",
           "rgba(255, 206, 86, 0.2)",
           "rgba(75, 192, 192, 0.2)",
           "rgba(153, 102, 255, 0.2)",
         ],
         borderColor: [
           "rgba(255, 99, 132, 1)",
           "rgba(54, 162, 235, 1)",
           "rgba(255, 206, 86, 1)",
           "rgba(75, 192, 192, 1)",
           "rgba(153, 102, 255, 1)",
         ],
         borderWidth: 1,
       },
     ],
   },
   options: {
     plugins: {
       legend: {
         display: true,
         position: "top",
        //  align: start,
         labels: {
           font: {
             size: 14,
           },
         },
       },
     },
     scales: {
       y: {
         beginAtZero: true,
       },
     },
   },
 });