import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";

import "./App.css";

export default function App() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);
  const [resultCity, setResultCity] = useState(null);

  function showWeather(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
    setResultCity(response.data.name);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=200cec8928a5e89f5e5c86277bac3ce1&units=metric`;
    axios.get(url).then(showWeather);
  }

  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <div>
        <Weather
          city={resultCity}
          temperature={temperature}
          description={description}
          humidity={humidity}
          wind={wind}
          icon={icon}
        />
      </div>
      <small>
        <a
          href="https://github.com/chloehmc/react-weather"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open source code
        </a>{" "}
        by Chloe Comstock
      </small>
    </div>
  );
}
