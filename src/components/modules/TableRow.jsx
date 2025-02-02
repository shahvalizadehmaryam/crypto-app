import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import styles from "./TableCoin.module.css";
import { marketCaps } from "../../services/cryptoApi";
const TableRow = ({coin,currency,setChart}) => {
   const {id,image,symbol,name,current_price,price_change_percentage_24h,total_volume} = coin;
   const showHandler = async() => {
    try {
      const res = await fetch(marketCaps(id));
      const json = await res.json();
      console.log("json",json);
      setChart({...json,coin});
      
    } catch (error) {
      setChart(null);
    }
    
   }
   return ( 
        <>
        <tr>
      <td>
        <div className={styles.symbol} onClick={showHandler}>
          <img src={image} alt="coin image" />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>{currency === "usd" ? '$' : currency === "eur" ? '€' : "¥" }{current_price.toLocaleString()}</td>
      <td className={price_change_percentage_24h > 0 ? styles.success : styles.error}>{price_change_percentage_24h.toFixed(2)}%</td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img
          src={price_change_percentage_24h > 0 ? chartUp : chartDown}
          alt={name}
        />
      </td>
    </tr>
        </>
     );
}
 
export default TableRow;