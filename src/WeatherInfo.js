import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return (
        <div className="weatherInfo">
            <div className="row">
              <div className="col">
              <WeatherTemperature celsius={props.data.temperature} />
      </div>
      <div className="col-7">
        <div className="float-left">
        <WeatherIcon code={props.data.icon} />
        </div>
        
        <span id="description">{props.data.description}</span>
      </div>
    </div>
    <div>
      <h4 id="date"><FormattedDate date={props.data.date} /></h4>
      <div className="row">
        <div className="col-4">
          <span id="min-temp">{props.data.minTemp}</span>°C | <span id="max-temp">{props.data.maxTemp}</span>°C
        </div>
        <div className="col-4">
          Wind: <span id="wind">{props.data.wind}</span> km/h
        </div>
        <div className="col-4">
          Humidity: <span id="humidity">{props.data.humidity}</span>%
        </div>
      </div>
    </div></div>
    );
}