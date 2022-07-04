import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const DisplayInfo = () => {
  // we use useRef to access the properties of element
  // in which the background color is to be set
  const aqi = useRef();

  // weather data received is destructured
  const { currentWeather } = useGlobalContext();
  const [data] = currentWeather;
  const { current } = data;

  // we use it as short form
  const pm10 = current.air_quality.pm10;

  // this renders when the weather-data is loaded
  useEffect(() => {
    // we use it as short form as well
    const style = aqi.current.style;
    // a/q to the pm10 data, the colors are added
    // to give it graphical meaning
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
      {/* the aqi useRef is used here to access it's properties */}
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
