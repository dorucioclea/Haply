import React, { Component } from "react";
import styled from "styled-components";
import { DataPoint } from "../../models/StatModel";
import { Line } from "react-chartjs-2";

const Chart = styled.div`
  width: 100%;
`;

const options = {
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false,
        },
        ticks: {
          fontColor: "#9399A9",
          fontSize: "16",
        },
      },
    ],
    yAxes: [
      {
        display: false,
      },
    ],
  },
  tooltips: {
    callbacks: {
      title: function () {},
    },
    displayColors: false,
    backgroundColor: "#FF6584",
  },
};

type Props = {
  dataPoints: DataPoint[];
  colorPrimary: string;
};

const StatChart = (props: Props) => {
  const data = {
    labels: props.dataPoints.map((dataPoint: DataPoint) => dataPoint.label),
    datasets: [
      {
        data: props.dataPoints.map((dataPoint: DataPoint) => dataPoint.value),
        backgroundColor: "rgba(64,114,253,0.1)",
        borderColor: props.colorPrimary,
        fill: false,
        pointRadius: 12,
        pointBorderColor: "rgba(0,0,0,0)",
        pointBackgroundColor: "rgba(0,0,0,0)",
      },
    ],
  };

  return (
    <Chart>
      <Line data={data} options={options} />
    </Chart>
  );
};

export default StatChart;
