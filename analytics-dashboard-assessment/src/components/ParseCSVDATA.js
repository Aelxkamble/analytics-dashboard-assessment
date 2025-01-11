import Papa from "papaparse";
import { useState, useEffect } from "react";
import excelfile from '../'

const ParseCSVDATA = () => {
  const [data, setData] = useState([]);
  const [evByYear, setEvByYear] = useState([]);
  const [topCities, setTopCities] = useState([]);
  const [evTypeDistribution, setEvTypeDistribution] = useState([]);

  useEffect(() => {
    Papa.parse("", {
      download: true,
      header: true,
      complete: (result) => {
        setData(result.data);
        processChartData(result.data);
      },
    });
  }, []);

  const processChartData = (data) => {
    // EV Population Growth by Model Year
    const yearCounts = data.reduce((acc, row) => {
      acc[row["Model Year"]] = (acc[row["Model Year"]] || 0) + 1;
      return acc;
    }, {});
    setEvByYear(
      Object.keys(yearCounts).map((year) => ({
        year,
        vehicles: yearCounts[year],
      }))
    );

    // Top 10 Cities with the Highest Number of EVs
    const cityCounts = data.reduce((acc, row) => {
      acc[row.City] = (acc[row.City] || 0) + 1;
      return acc;
    }, {});
    setTopCities(
      Object.entries(cityCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([city, count]) => ({ city, count }))
    );

    // Distribution of Electric Vehicle Types
    const typeCounts = data.reduce((acc, row) => {
      acc[row["Electric Vehicle Type"]] =
        (acc[row["Electric Vehicle Type"]] || 0) + 1;
      return acc;
    }, {});
    setEvTypeDistribution(
      Object.entries(typeCounts).map(([type, count]) => ({ type, count }))
    );
  };

  return <div></div>;
};

export default ParseCSVDATA;
