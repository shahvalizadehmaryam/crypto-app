
import styles from "./Chart.module.css";
const Chart = ({chart , setChart}) => {
    const [type , setType] = useState("prices");
    console.log(convertData(chart,type))
    return ( 
        <div className={styles.container}>
            <span className={styles.cross} onClick={() => setChart(null)}>X</span>
            <div className={styles.chart}>modal</div>
        </div>
     );
}
 
export default Chart;