import React, { useState } from "react";
import "./Weather.css"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";


export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });

  function handleResponse(response) {
    setweatherData({
    ready: true,
    temperature: Math.round(response.data.main.temp),
    city: response.data.name,
    description: response.data.weather[0].description,
    wind: Math.round(response.data.wind.speed),
    humidity: response.data.main.humidity,
    icon: `https://media.istockphoto.com/vectors/summer-sun-vector-icon-in-yellow-vector-id696357142?s=612x612`,
    date: new Date(response.data.dt * 1000),
    });
    
  }
   if(weatherData.ready) {
  return (
            <div>
      <div className="row">
      <div className="col-5">
        <h1 id="city">{weatherData.city}</h1>
      </div>
      <div className="col">
        <form id="search-form">
          <div className="row">
            <div className="col">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                id="city-input"
                autocomplete="off"
                autoFocus="on"
              />
            </div>
            <div ClassName="col-2">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
    </div>
        <div className="row">
      <div className="col-5">
        <span id="temperature">{weatherData.temperature}</span>
        <span id="units">
          <a href="#" id="celsius">
            {" "}
            °C |
          </a>{" "}
          <a href="#" id="fahrenheit">
            °F
          </a>
        </span>
      </div>
      <div className="col-7">
        <img id="icon" src={weatherData.icon} width="75 px" />
        <span id="description">{weatherData.description}</span>
      </div>
    </div>
    <div>
      <h4 id="date"><FormattedDate date={weatherData.date} /></h4>
      <div className="row">
        <div className="col-4">
          <span id="min-temp">17</span>° | <span id="max-temp">28</span>°
        </div>
        <div className="col-4">
          Wind: <span id="wind">{weatherData.wind}</span> km/h
        </div>
        <div className="col-4">
          Humidity: <span id="humidity">{weatherData.humidity}</span>%
        </div>
      </div>
    </div>
  </div>
    );
} else {
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=76c8b94d63a7e1828617006132974e2d&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
}
}


