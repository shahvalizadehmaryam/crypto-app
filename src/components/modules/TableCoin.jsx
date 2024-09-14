import { RotatingLines } from "react-loader-spinner";
import TableRow from "./TableRow";
import styles from "./TableCoin.module.css";
function TableCoin({ coins, isLoading }) {
  console.log(coins);
  return (
    <div className={styles.container}>
      {isLoading ? (
        <RotatingLines visible={true} color="#3874ff" strokeWidth="2" />
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
              <TableRow key={coin.id} coin={coin} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;

// const TableRow = ({coin:{image,symbol,name,current_price,price_change_percentage_24h,total_volume}}) => {
//   return (
//     <tr>
//       <td>
//         <div>
//           <img src={image} alt="coin image" />
//           <span>{symbol.toUpperCase()}</span>
//         </div>
//       </td>
//       <td>{name}</td>
//       <td>${current_price.toLocaleString()}</td>
//       <td>{price_change_percentage_24h.toFixed(2)}%</td>
//       <td>{total_volume.toLocaleString()}</td>
//       <td>
//         <img
//           src={price_change_percentage_24h > 0 ? chartUp : chartDown}
//           alt={name}
//         />
//       </td>
//     </tr>
//   );
// };
