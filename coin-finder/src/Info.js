export default function Info({ name, data }) {
  return !data || !name ? (
    <p></p>
  ) : !data?.id || !data?.name ? (
    <p>No data for {name}</p>
  ) : (
    <div>
      <h2>
        Coin: {name} " {data.symbol} "
      </h2>
      <p id="pic">
        <img src={data?.image?.small} alt="pic" />
      </p>
      <p>The current price in US: ${data?.market_data?.current_price?.usd}</p>
      <p>
        {data.name} Website: {data?.links?.homepage}
      </p>
      <p id="desc">{data?.description?.en}</p>
    </div>
  );
}
