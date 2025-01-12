import React from "react";
import Chart from "react-apexcharts";

const MixedChart = () => {
  const options = {
    chart: { height: 400, type: "line" },
    title: { text: "Electric Vehicle Mixed Chart", align: "center" },
    stroke: { width: [0, 4] },
    xaxis: { categories: ["2020", "2021", "2022", "2023"] },
    tooltip: { theme: "dark" },
  };

  const series = [
    {
      name: "Electric Range",
      type: "column",
      data: [150, 200, 300, 400],
    },
    {
      name: "Base MSRP",
      type: "line",
      data: [30000, 35000, 40000, 45000],
    },
  ];

  return <Chart options={options} series={series} type="line" height={400} />;
};

export default MixedChart;
