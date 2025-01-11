import React from "react";
import Chart from "react-apexcharts";

const TopCitiesChart = () => {
  const options = {
    chart: {
      id: "top-cities",
    },
    xaxis: {
      categories: [
        "Seattle",
        "Bellevue",
        "Redmond",
        "Tacoma",
        "Spokane",
        "Kent",
        "Everett",
        "Olympia",
        "Vancouver",
        "Renton",
      ],
    },

    plotOptions: {
      bar: {
        horizontal: true, // Makes the bar chart horizontal
      },
    },
  };

  const series = [
    {
      name: "Number of EVs",
      data: [1200, 950, 750, 600, 550, 500, 450, 400, 350, 300], // Sample data
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default TopCitiesChart;
