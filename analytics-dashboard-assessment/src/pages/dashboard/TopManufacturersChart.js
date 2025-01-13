import React from "react";
import Chart from "react-apexcharts";

const TopManufacturersChart = () => {
  const options = {
    chart: {
      id: "top-manufacturers",
    },
    xaxis: {
      categories: [
        "Tesla",
        "Nissan",
        "Chevrolet",
        "Ford",
        "BMW",
        "Hyundai",
        "Kia",
        "Audi",
        "Volkswagen",
        "Jaguar",
      ],
    },
  };

  const series = [
    {
      name: "Average Range (miles)",
      data: [300, 250, 230, 210, 200, 190, 185, 180, 175, 170], // Sample data
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default TopManufacturersChart;
