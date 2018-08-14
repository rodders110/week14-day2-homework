import React from 'react';

const ChartData = (props) => {
  console.log(props.charts);

  if(!props.charts){
    return null
  }


  let charts = props.charts.map((chart, index) => {
    return <li key={index}>{chart.title.label}</li>
  })
  return (
    <React.Fragment>
      <p>This is the Charts List</p>
      <ol>
        {charts}
      </ol>
      </React.Fragment>
  )
}

export default ChartData;
