import { useEffect, useState } from "react";
import { getSearchedCoins } from "../../services/cryptoApi";
import { RotatingLines } from "react-loader-spinner";

const Search = ({ currency, setCurrency }) => {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);
  const [isLoading , setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setCoins([]);
    if (!text) {
      setIsLoading(false);
      return;
    };
    const search = async () => {
      try {
        const res = await fetch(getSearchedCoins(text),{signal:controller.signal});
        const json = await res.json();
        setIsLoading(false);
        if(json.coins) {
          setCoins(json.coins);

        }
        else{
          alert(json.status.error_message)
        }
      } catch (error) {
        if(error.name !== "AbortError"){
          alert(error.message)
        }
      }

    };
    setIsLoading(true);
    search();
    return ()=> controller.abort();
  }, [text]);
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setText(e.target.value)}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      <div>
        {isLoading && <RotatingLines width="60" height="60" strokeWidth="2" strokeColor="#3874ff" />}
        <ul>
          {coins.map((coin => <li key={coin.id}>
            <img src={coin.thumb} alt={coin.name} />
            {coin.symbol}
          </li>))}
        </ul>
      </div>
    </>
  );
};

export default Search;
