import React, { useState } from "react";

export default function WeatherTemperature(props) {
const [unit, setUnit] = useState("celsius");

function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenhet");
}

function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}

function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
}

if (unit === "celsius") {
   return (
    <div className="WeatherTemperature">
        <div className="row">
    <div className="col-5">
        <span id="temperature">{Math.round(props.celsius)}</span>
        <span id="units">
          <a href="#" id="celsius">
            °C |
          </a>{" "}
          <a href="/" id="fahrenheit" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
      </div>
      </div>
);
   } else {
       return (
           <div className="WeatherTemperature">
        <div className="row">
    <div className="col-5">
        <span id="temperature">{Math.round(fahrenheit())}</span>
        <span id="units">
          <a href="#" id="celsius" onClick={convertToCelsius} >
            °C |
          </a>{" "}
          <a href="/" id="fahrenheit" >
            °F
          </a>
        </span>
      </div>
      </div>
      </div>
       );
   }
}