import React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, ColumnSeries, Tooltip, Category, RangeColorSettingsDirective, RangeColorSettingDirective } from "@syncfusion/ej2-react-charts";
import { Header } from "../../components";
import {rangeColorMapping, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, colorMappingData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const ColorMapping = () => {
const { currentMode } = useStateContext();


    return (
        <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
            <Header category='Color mapping' title='USA CLimate - Weather by Month'/>
        <ChartComponent
        id="charts"
        primaryXAxis={ColorMappingPrimaryXAxis}
        primaryYAxis={ColorMappingPrimaryYAxis}
        legendSettings={{ mode: 'Range', background: 'white'}}
        chartArea={{ border: { width: 0 }}}
        tooltip={{ enable: true }}
        background={ currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
            <Inject services={[ColumnSeries, Tooltip, Category, Legend]}/>
            <SeriesCollectionDirective>
                <SeriesDirective
                dataSource={colorMappingData[0]}
                name="USA"
                xName="x"
                yName="y"
                type="Column"
                cornerRadius={{
                    topLeft: 10,
                    topRight: 10,
                }}
                />
            </SeriesCollectionDirective>
            <RangeColorSettingsDirective>
                {rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item}/>)}
            </RangeColorSettingsDirective>
        </ChartComponent>
        </div>
    );
}
export { ColorMapping };