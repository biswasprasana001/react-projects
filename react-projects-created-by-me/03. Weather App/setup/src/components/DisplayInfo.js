import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const DisplayInfo = () => {
  const aqi = useRef();
  const { currentWeather } = useGlobalContext();
  const [data] = currentWeather;
  const { current } = data;
  const pm10 = current.air_quality.pm10;

  useEffect(() => {
    const style = aqi.current.style;
    if (pm10 <= 50) {
      style.backgroundColor = "#d4e6a5";
      style.color = "black";
    } else if (pm10 > 50 && pm10 <= 100) {
      style.backgroundColor = "#e5e6a5";
      style.color = "black";
    } else if (pm10 > 100 && pm10 <= 150) {
      style.backgroundColor = "#e6d5a5";
      style.color = "black";
    } else {
      style.backgroundColor = "#e6a9a5";
      style.color = "black";
    }
  });

  return (
    <div className="weather">
      <div className="current-condition">
        <div className="img">
          <img src={current.condition.icon} alt="weather-icon" />
        </div>
        <div className="weather-data">
          <p>
            <span>Location:</span>
            {data.location.name}
          </p>
          <p>
            <span>Weather:</span>
            {current.condition.text}
          </p>
          <p>
            <span>Last Updated:</span>
            {current.last_updated}
          </p>
          <p>
            <span>Temp (&deg;C):</span>
            {current.temp_c}
          </p>
        </div>
      </div>
      <div className="aqi" ref={aqi}>
        <p>
          <span className="aqi-data">
            AirQuality (PM<sup>10</sup>):
          </span>
          {Math.floor(pm10)}
        </p>
      </div>
    </div>
  );
};

export default DisplayInfo;
