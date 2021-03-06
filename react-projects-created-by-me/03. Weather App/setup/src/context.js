import React, { useContext, useEffect, useState } from "react";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recommendation, setRecommendation] = useState([]);
  const [currentWeather, setCurrentWeather] = useState([]);

  const fetchCurrentWeather = async (cityName) => {
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=5baa84cbff214636ad162010223006&q=${cityName}&aqi=yes`
      );
      const data = await res.json();
      // the received data is set in currentWeather State
      setCurrentWeather([data]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    // now when this runs the data is fetched a/q to the 
    // input in searchTerm
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/search.json?key=5baa84cbff214636ad162010223006&q=${searchTerm}`
      );
      const data = await res.json();
      if (data.length > 0) {
        const cityNameRecommendations = data.map((place) => {
          return {
            name: place.name,
            region: place.region,
            country: place.country,
          };
        });
        // data added if present
        setRecommendation([...cityNameRecommendations]);
      } else {
        // if not, empty array is placed to not display anything
        setRecommendation([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // this runs with each change in searchTerm state
    fetchData();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        recommendation,
        setRecommendation,
        fetchCurrentWeather,
        currentWeather,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
