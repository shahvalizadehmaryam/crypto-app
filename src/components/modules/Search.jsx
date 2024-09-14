import { useEffect, useState } from "react";
import { getSearchedCoins } from "../../services/cryptoApi";

const Search = ({ currency, setCurrency }) => {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    if (!text) return;
    const search = async () => {
      const res = await fetch(getSearchedCoins(text));
      const json = await res.json();

      if(json.coins) setCoins(json.coins);
    };
    search();
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
    </>
  );
};

export default Search;
