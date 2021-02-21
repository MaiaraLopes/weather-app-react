import React from "react";
import "./Weather.css"
import "bootstrap/dist/css/bootstrap.min.css";


export default function Weather() {
    return (
      <div className="row">
      <div className="col-5">
        <h1 id="city">Brasília</h1>
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
        <span id="temperature">25</span>
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
        <img id="icon" src="" width="75 px" />
        <span id="description">Sunny</span>
      </div>
    </div>
    <div>
      <h4 id="date">17 January</h4>
      <div className="row">
        <div className="col-4">
          <span id="min-temp">17</span>° | <span id="max-temp">28</span>°
        </div>
        <div className="col-4">
          Wind: <span id="wind">12</span> km/h
        </div>
        <div className="col-4">
          Humidity: <span id="humidity">75</span>%
        </div>
      </div>
    </div>
  
    );
}