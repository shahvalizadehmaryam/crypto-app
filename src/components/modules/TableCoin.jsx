import { RotatingLines } from "react-loader-spinner";
import TableRow from "./TableRow";
import styles from "./TableCoin.module.css";
function TableCoin({ coins, isLoading , currency,setChart}) {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <RotatingLines visible={true} strokeColor="#3874ff" strokeWidth="2" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow key={coin.id} coin={coin} currency={currency} setChart={setChart} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;
