"use client";
import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Link from "next/link";

const noChartComponentDataLayout = () => {
  return (
    <Link
      href="/admin/research"
      className="text-blue-500 hover:text-blue-700 underline"
    >
      Click here to add new research papers
    </Link>
  );
};

const ChartComponent = ({ chartComponentData = {} }) => {
  const labelLists = chartComponentData?.labels || [];
  const dataList = chartComponentData?.values || [];
  const data = {
    labels: labelLists,
    datasets: [
      {
        label: "Number of research paper published",
        data: dataList,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgb(255, 99, 132)"],
        borderWidth: 1,
      },
    ],
  };
  return chartComponentData ? (
    <Bar data={data} />
  ) : (
    noChartComponentDataLayout()
  );
};

export default ChartComponent;
