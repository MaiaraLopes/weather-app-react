import React from "react";
import "./Form.css"

export default function Form() {
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
              />
            </div>
            <div ClassName="col-2">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}