import React from "react";
import Chart from "react-apexcharts";

const FunnelChart = () => {
  const options = {
    chart: { type: "funnel", height: 400 },
    title: { text: "Electric Vehicle Funnel Chart", align: "center" },
    plotOptions: {
      funnel: { curve: "smooth", barHeight: "80%" },
    },
    tooltip: { theme: "dark" },
  };

  const series = [
    {
      name: "Electric Range (miles)",
      data: [
        { x: "2023", y: 200 },
        { x: "2022", y: 300 },
        { x: "2021", y: 450 },
        { x: "2020", y: 600 },
      ],
    },
  ];

  return <Chart options={options} series={series} type="funnel" height={400} />;
};

export default FunnelChart;
