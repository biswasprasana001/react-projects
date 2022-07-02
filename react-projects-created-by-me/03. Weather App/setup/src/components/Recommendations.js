import { useGlobalContext } from "../context";

const Recommendations = () => {
  const {
    setRecommendation,
    recommendation,
    fetchCurrentWeather,
    setSearchTerm,
  } = useGlobalContext();
  const handleClick = (rec) => {
    setRecommendation([]);
    fetchCurrentWeather(rec);
    setSearchTerm("");
  };

  return (
    <div className="recommendations">
      {recommendation.map((rec, id) => (
        <div
          key={id}
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
