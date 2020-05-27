import React from 'react';
import { useState } from "react";
import TempChart from './Temp'
import WindChart from './Wind'
import PressChart from './Pressure'
import './App.css';

function App() {
  const [param,setParam] = useState('temp');
  function handleChange(e){
    setParam(e.target.value);
  }
  function renderChart(param_arg){
    switch (param_arg) {
      case "temp":
        return(
            <TempChart/>
          )
      case "wind":
        return(
            <WindChart/>
        )
      case "press":
        return(
            <PressChart/>
        )
    }
  }
  return (
    <div className="App">
      <select onChange={handleChange} value={param}>
        <option value="temp">Temperature</option>
        <option value="wind">Wind</option>
        <option value="press">Pressure</option>
      </select>
      {renderChart(param)}
    </div>
  );
}

export default App;
