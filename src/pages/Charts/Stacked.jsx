import React from "react";
import { ChartsHeader, StackedChart } from "../../components";
import { pieChartData } from "../../data/dummy";

const Stacked = () => {

    return (
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <ChartsHeader category="Stacked" title="Revenue Breakdown"/>
        <div className="w-full">
            <StackedChart />
        </div>
        </div>
    );
}
export { Stacked };