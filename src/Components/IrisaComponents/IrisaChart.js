import React from 'react'
import { Chart, ArgumentAxis, ValueAxis, PieSeries } from "@devexpress/dx-react-chart-material-ui";

export default IrisaChart

function IrisaChart(props){
    const {data , ...others} = props

    return (
    //     <Chart
    //     data={data} 
    //   >
    //     <ArgumentAxis />
    //     <ValueAxis />
    //     <LineSeries valueField="value" argumentField="argument" />
    //   </Chart>     
      
      <Chart data={data} width={650} height={500}>
      <ArgumentAxis showGrid />
      <ValueAxis />

      <PieSeries valueField="value" argumentField="argument" />
    </Chart>
  
    )
}
