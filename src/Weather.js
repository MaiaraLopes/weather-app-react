import React, { useState } from "react";
import "./Weather.css"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";


export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setweatherData({
    ready: true,
    temperature: Math.round(response.data.main.temp),
    city: response.data.name,
    description: response.data.weather[0].description,
    wind: Math.round(response.data.wind.speed),
    humidity: response.data.main.humidity,
    icon: response.data.weather[0].icon,
    date: new Date(response.data.dt * 1000),
    });
    
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=76c8b94d63a7e1828617006132974e2d&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handlecityChange(event){
   setCity(event.target.value);
  }

   if(weatherData.ready) {
  return (
            <div>
      <div className="row">
      <div className="col-5">
        <h1 id="city">{weatherData.city}</h1>
      </div>
      <div className="col">
        <form id="search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                id="city-input"
                autocomplete="off"
                autoFocus="on"
                onChange={handlecityChange}
              />
            </div>
            <div ClassName="col-2">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
    </div>
    <WeatherInfo data={weatherData}/>
        
  </div>
    );
} else {
  search();
  return "Loading...";
}
}


