import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return (
        <div className="weatherInfo">
            <div className="row">
      <div className="col-5">
        <span id="temperature">{props.data.temperature}</span>
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
        <img id="icon" src={props.data.icon} width="75 px" />
        <span id="description">{props.data.description}</span>
      </div>
    </div>
    <div>
      <h4 id="date"><FormattedDate date={props.data.date} /></h4>
      <div className="row">
        <div className="col-4">
          <span id="min-temp">17</span>° | <span id="max-temp">28</span>°
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