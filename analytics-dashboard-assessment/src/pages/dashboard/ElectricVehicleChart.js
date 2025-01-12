import React from "react";
import Chart from "react-apexcharts";

const ElectricVehicleChart = () => {
  const options = {
    chart: {
      type: "bar",
      height: 400,
      background: "#f4f4f4",
      toolbar: {
        show: false,
      },
    },
    title: {
      text: "Electric Vehicle Statistics by Model Year",
      align: "center",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#263238",
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        borderRadius: 8,
        colors: {
          ranges: [
            { from: 0, to: 100000, color: "#00BFFF" },
            { from: 100000, to: 200000, color: "#008B8B" },
          ],
        },
      },
    },
    colors: ["#546E7A", "#F9A825"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["#fff"],
    },
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f5f5f5", "#ffffff"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "1998",
        "2000",
        "2002",
        "2008",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
      ],
      title: {
        text: "Model Year",
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          color: "#263238",
        },
      },
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      title: {
        text: "Values",
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          color: "#263238",
        },
      },
      labels: {
        formatter: function (val) {
          return val.toLocaleString();
        },
        style: {
          fontSize: "12px",
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      markers: {
        radius: 12,
      },
      labels: {
        colors: "#263238",
      },
    },
    tooltip: {
      theme: "dark",
      y: {
        formatter: function (val) {
          return val.toFixed(2);
        },
      },
      marker: {
        show: true,
      },
    },
  };

  const series = [
    {
      name: "Electric Range (miles)",
      data: [
        58.0, 58.0, 95.0, 220.0, 245.0, 72.78, 71.99, 83.33, 84.37, 100.28,
        104.25, 115.42, 160.29, 180.57, 242.02, 11.09, 4.13, 4.31, 17.86,
      ],
    },
    {
      name: "Base MSRP ($)",
      data: [
        0.0, 0.0, 0.0, 98950.0, 110950.0, 1643.22, 8003.33, 12514.85, 13842.34,
        0.0, 2388.32, 1062.46, 2566.9, 1677.44, 123.25, 0.0, 0.0, 0.0, 0.0,
      ],
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={400} />
    </div>
  );
};

export default ElectricVehicleChart;
