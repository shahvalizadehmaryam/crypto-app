import styles from "./Layout.module.css";
const Layout = ({children}) => {
    return ( 
        <div>
            <header className={styles.header}>
                <h1>Crypto App</h1>
            </header>
            {children}
            <footer className={styles.footer}>Developed by Maryam Shahvalizadeh</footer>
        </div>
     );
}
 
export default Layout;