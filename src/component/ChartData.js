import React from 'react';

const ChartData = (props) => {
  console.log(props.charts);

  if(!props.charts){
    return null
  }


  let charts = props.charts.map((chart, index) => {
    return(
      <React.Fragment>
        <li key={index}>
          <p>{chart.title.label}</p>
          <div className="image">
          <img src={chart["im:image"][0]["label"]} key="{index + 20}" alt="" className="album_artwork"/>
          </div>
        </li>
      </React.Fragment>
    )
  })

  // let covers = props.charts.map((chart, index) =>{
  //   console.log(chart["im:image"][0]["label"]);
  //   return
  // })
  return (
    <React.Fragment>
      <ol>
        {charts}
      </ol>
      </React.Fragment>
  )
}

export default ChartData;
