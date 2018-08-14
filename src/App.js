import React, { Component } from 'react';
import ChartContainer from './container/ChartContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='ChartContainer'>
        <h1>Top 20</h1>
        <ChartContainer/>
        </div>
    );
  }
}

export default App;
