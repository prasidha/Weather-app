import React, { useState } from "react";
import "./App.css";
import { apiCall } from "./component/apiCall";
import { Button, Input } from "@material-ui/core";
import WeatherCard from "./component/WeatherCard";

const App = () => {
  const date = new Date().toDateString();
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const searchWeatherData = async (e) => {
    const data = await apiCall(cityName);
    setWeatherData(data);
    setCityName("");
  };

  return (
    <div className="App">
      <h1> Weather App</h1>
      <div className="input__">
        <Input
          type="text"
          placeholder="Search weather in your city "
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => searchWeatherData()}
        >
          {" "}
          Search{" "}
        </Button>

        {weatherData.main && (
          <div className="card">
            <WeatherCard weatherData={weatherData} date={date} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
