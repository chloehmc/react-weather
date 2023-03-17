import React from "react";

export default function Weather(props) {
  if (props.temperature) {
    return (
      <ul>
        <li>
          {" "}
          The temperature in {props.city} is {Math.round(props.temperature)} °C{" "}
        </li>
        <li> Description: {props.description}</li>
        <li> Humidity: {props.humidity} %</li>
        <li> Wind: {props.wind} km/h</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
            alt={props.description}
          />
        </li>
      </ul>
    );
  } else {
    return <p> Search city for current weather</p>;
  }
}
