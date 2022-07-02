import { useGlobalContext } from "../context";
import Recommendations from "./Recommendations";

const SearchBar = () => {
  const { searchTerm, setSearchTerm, recommendation } = useGlobalContext();

  return (
    <div className="searchBar">
      <p className="info">
        Search and Select the City, Only then the Weather Data of the City will
        be Displayed :
      </p>
      <input
        type="text"
        name="search"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      {recommendation.length > 0 && <Recommendations />}
    </div>
  );
};

export default SearchBar;
