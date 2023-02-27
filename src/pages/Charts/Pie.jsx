import React from "react";
import { ChartsHeader, Doughnut } from "../../components";
import { pieChartData } from "../../data/dummy";

const Pie = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pie" title="Project Cost Breakdown" />
      <div className="w-full">
        <Doughnut
          id="chart-pie"
          data={pieChartData}
          legendVisibility
          height="full"
        />
      </div>
    </div>
  );
};
export { Pie };
