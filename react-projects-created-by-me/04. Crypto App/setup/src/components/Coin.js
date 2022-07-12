const Coin = ({ image, symbol, price, pricechange, marketcap }) => {
  return (
    <div className="coin-row">
      <div className="coin">
        <div className="img">
          <img src={image} alt="crypto" />
        </div>
        <h4>{symbol.toUpperCase()}</h4>
      </div>
      <div className="coin-data">
        <p className="coin-price">Rs.{price}</p>
        {pricechange < 0 ? (
          <p className="coin-percent red">{pricechange.toFixed(2)}%</p>
        ) : (
          <p className="coin-percent green">{pricechange.toFixed(2)}%</p>
        )}
        <p className="coin-marketcap">Rs.{marketcap.toLocaleString()}</p>
      </div>
      <div className="border"></div>
    </div>
  );
};

export default Coin;
