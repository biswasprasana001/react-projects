const Coin = ({ image, symbol, price, pricechange, marketcap }) => {
  return (
    <div className="coin-row">
      <div className="coin">
        <img src={image} alt="crypto" />
        <h1>{symbol}</h1>
      </div>
      <div className="coin-data">
        <p className="coin-price">Rs.{price}</p>
        {pricechange < 0 ? (
          <p className="coin-percent red">{pricechange.toFixed(2)}%</p>
        ) : (
          <p className="coin-percent green">{pricechange.toFixed(2)}%</p>
        )}
        <p className="coin-marketcap">
          Mkt Cap: Rs.{marketcap.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Coin;
