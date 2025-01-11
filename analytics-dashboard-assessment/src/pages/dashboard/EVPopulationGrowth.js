import React from "react";
import Chart from "react-apexcharts";

const EVPopulationGrowth = () => {
  const options = {
    chart: {
      id: "ev-population-growth",
    },
    xaxis: {
      categories: [
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
      ],
    },
  };

  const series = [
    {
      name: "Number of EVs",
      data: [150, 300, 600, 1200, 2500, 4500, 7500, 12000], // Sample data
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default EVPopulationGrowth;
