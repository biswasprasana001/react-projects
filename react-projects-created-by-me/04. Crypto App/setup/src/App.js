import { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./components/Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="container">
      <form className="coin-search">
        <input
          type="text"
          className="coin-search-bar"
          placeholder="Type The Name of the Coin"
          onChange={handleChange}
        />
      </form>
      <div className="coin-container">
        <div className="coin-row" id="coin-heading-row">
          <h2 id="coin-heading">Coin</h2>
          <div className="coin-data">
            <p className="coin-price">Price</p>

            <p className="coin-percent">Price Change (24h)</p>

            <p className="coin-marketcap">Market Cap</p>
          </div>
          <div className="border"></div>
        </div>
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              image={coin.image}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              pricechange={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
