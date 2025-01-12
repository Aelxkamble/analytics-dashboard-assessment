import React from "react";
import Chart from "react-apexcharts";

const RangeAreaChart = () => {
  const options = {
    chart: { height: 400, type: "rangeArea" },
    title: { text: "Electric Vehicle Range Area Chart", align: "center" },
    tooltip: { theme: "dark" },
  };

  const series = [
    {
      name: "Range",
      data: [
        { x: "2020", y: [50, 150] },
        { x: "2021", y: [100, 200] },
        { x: "2022", y: [150, 250] },
        { x: "2023", y: [200, 300] },
      ],
    },
  ];

  return (
    <Chart options={options} series={series} type="rangeArea" height={400} />
  );
};

export default RangeAreaChart;
