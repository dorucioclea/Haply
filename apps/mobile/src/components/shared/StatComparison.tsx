import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { DataPoint, StatModel } from "../../models/StatModel";
import {
  selectColorPrimary,
  selectColorSecondary,
} from "../../state/settingsSlice";

const options = {
  legend: {
    display: false,
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const StyledStatComparison = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

type Props = {
  dataPoints: DataPoint[];
};

const StatComparison = (props: Props) => {
  const colorPrimary = useSelector(selectColorPrimary);
  const colorSecondary = useSelector(selectColorSecondary);

  const data = {
    //   labels: props.dataPoints.map((dataPoint: DataPoint) => dataPoint.label),
    labels: ["Outside", "Office", "Dairy", "Cafe", "School", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, -19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <StyledStatComparison>
      <HorizontalBar data={data} options={options} />
    </StyledStatComparison>
  );
};

export default StatComparison;
