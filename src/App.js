import React, { Component } from 'react'
import "./App.css"
import WeatherCard from './component/WeatherCard'

export default class App extends Component {
  
  render() {
    return (
    
      <div className="App">
         
      <h1>Weather App </h1>
        <div className="input__">
             <input placeholder="     search weather in your city...."/>
             <button>search</button>
        </div>
        <div className="card">
        <WeatherCard/>
        </div>
      </div>
    
    )
  }
}

