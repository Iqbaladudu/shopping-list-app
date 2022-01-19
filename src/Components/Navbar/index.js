import shoppingIcon from './../../assets/shopping-icon.svg'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <img className={styles.navIcon} alt='shopping icon' src={shoppingIcon} />
            <h1 className={styles.navTitle}>Shopping List</h1>
        </nav>
    )
}

export default Navbar