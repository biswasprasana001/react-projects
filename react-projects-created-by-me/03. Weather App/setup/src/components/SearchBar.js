import { useGlobalContext } from "../context";
import Recommendations from "./Recommendations";

const SearchBar = () => {
  // we use useContext for better management of states
  const { 
    searchTerm, 
    setSearchTerm, 
    recommendation 
  } = useGlobalContext();
  // 1. setSearchTerm will be used to set the term we type in input,
  // 2. that input value is then displayed in the input element via searchTerm,
  // 3. the recommendation which will be displayed here is the data i.e is 
  //    received after request with value of searchTerm is made
  // 4. Request is done in context.js page where the api is :  
  //    https://api.weatherapi.com/v1/search.json?
  //    key={Your_Key_Provided_When_You_Create_an_Account}&q=${searchTerm} 
  return (
    <div className="searchBar">
      <p className="info">
        {/* neccessary instructions */}
        Search and Select the City, Only then the Weather Data of the City 
        will be Displayed :
      </p>
      <input
        type="text"
        name="search"
        // the setSearchTerm is called everytime when there is change in input
        // making the process of calling the reccommendations via API 
        // again and again, thus displaying reccommended data a/q
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      {recommendation.length > 0 && <Recommendations />}
    </div>
  );
};

export default SearchBar;
