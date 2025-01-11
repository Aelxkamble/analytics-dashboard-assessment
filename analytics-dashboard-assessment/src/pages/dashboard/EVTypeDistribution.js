import React from "react";
import Chart from "react-apexcharts";

const EVTypeDistribution = () => {
  const options = {
    chart: {
      id: "ev-types",
    },
    labels: [
      "Battery Electric Vehicle (BEV)",
      "Plug-in Hybrid Electric Vehicle (PHEV)",
    ],
  };

  const series = [70, 30]; // Example: 70% BEV, 30% PHEV

  return (
    <div>
      <Chart options={options} series={series} type="pie" height={800} />
    </div>
  );
};

export default EVTypeDistribution;
