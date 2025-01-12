import React from "react";
import Chart from "react-apexcharts";

const CandlestickChart = () => {
  const options = {
    chart: { height: 400, type: "candlestick" },
    title: { text: "Electric Vehicle Candlestick Chart", align: "center" },
    tooltip: { theme: "dark" },
  };

  const series = [
    {
      data: [
        { x: "2020", y: [100, 200, 80, 180] }, // [open, high, low, close]
        { x: "2021", y: [200, 300, 180, 250] },
        { x: "2022", y: [250, 350, 230, 300] },
        { x: "2023", y: [300, 400, 280, 380] },
      ],
    },
  ];

  return (
    <Chart options={options} series={series} type="candlestick" height={400} />
  );
};

export default CandlestickChart;
