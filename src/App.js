import React from "react";
import './App.css';
import Weather from "./Weather"; 
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    
    <div className="App">
    <div className="container">
    <div className="wrapper">
    <div className="weather-app">
            <h1 className="title">Mai Weather</h1>
          <Weather defaultCity="London"/>
    </div>
    </div>
    </div> 
    <footer>
       This project was coded by Maiara Lopes and is <a href="https://github.com/MaiaraLopes/final-project" target="_blank" rel="noreferrer">open-sourced.
     </a>
      </footer>
    </div>
     );
}
