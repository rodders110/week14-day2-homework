import React from 'react';
import ChartData from '../component/ChartData';

class ChartContainer extends React.Component{
  constructor(props){
  super(props);
    this.state = {
      top20: []
    };
  }

  componentDidMount(){
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then(response => response.json())
    .then(chartData => this.setState({top20: chartData.feed.entry}))
  }

  render(){
    return(
        <ChartData charts={this.state.top20}/>
    )
  }
}

export default ChartContainer;
