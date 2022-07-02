import SearchBar from "./components/SearchBar";
import DisplayInfo from "./components/DisplayInfo";
import { useGlobalContext } from "./context";

function App() {
  const { currentWeather } = useGlobalContext();
  return (
    <div className="grid-container">
      <div className="container">
        <SearchBar />
        {currentWeather.length > 0 && <DisplayInfo />}
      </div>
    </div>
  );
}

export default App;
