import React from 'react';

const ChartData = (props) => {
  console.log(props.charts);

  if(!props.charts){
    return null
  }


  let charts = props.charts.map((chart, index) => {
    return(
        <li key={index}>
          <p>{index + 1}. {chart.title.label}</p>
          <img src={chart["im:image"][0]["label"]} key="{index + 20}" alt="" className="album_artwork"/>
        </li>
    )
  })

  // let covers = props.charts.map((chart, index) =>{
  //   console.log(chart["im:image"][0]["label"]);
  //   return
  // })
  return (
      <ol>
        {charts}
      </ol>
  )
}

export default ChartData;
