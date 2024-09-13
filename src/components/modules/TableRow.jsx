import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
const TableRow = ({coin}) => {
   const {image,symbol,name,current_price,price_change_percentage_24h,total_volume} = coin;
    return ( 
        <>
        <tr>
      <td>
        <div>
          <img src={image} alt="coin image" />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>${current_price.toLocaleString()}</td>
      <td>{price_change_percentage_24h.toFixed(2)}%</td>
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