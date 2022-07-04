import { useGlobalContext } from "../context";

const Recommendations = () => {
  const {
    setRecommendation,
    recommendation,
    fetchCurrentWeather,
    setSearchTerm,
  } = useGlobalContext();

  // this runs after one of the displayed data
  // is clicked, this clears the reccomendations,
  // clears the input element,
  // and sends the cityName clicked to fetch the
  // weather data
  const handleClick = (rec) => {
    setRecommendation([]);
    fetchCurrentWeather(rec);
    setSearchTerm("");
  };

  return (
    <div className="recommendations">
      {/* the data is displayed */}
      {recommendation.map((rec, id) => (
        <div
          key={id}
          // when clicked on it, a function is triggered
          // the name is also passed
          onClick={() => handleClick(rec.name)}
          className="recommendation"
        >
          {rec.name}, {rec.region}, {rec.country}
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
