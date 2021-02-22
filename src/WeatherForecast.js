import React, { useState } from "react";
import ForecastPreview from "./ForecastPreview";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast (props){
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForescast] = useState(null);

    function handleForecastResponse(response) {
setForescast(response.data);
setLoaded(true);
    }
    
    if (loaded && props.city === forecast.city.name) {

        return (
        <div className="WeatherForecast row">
            <ForecastPreview data={forecast.list[0]} />
            <ForecastPreview data={forecast.list[1]} />
            <ForecastPreview data={forecast.list[2]} />
        </div>
        );

    } else {

    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=76c8b94d63a7e1828617006132974e2d&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);
    return null;
    }
}