import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const styleActive = navData => navData.isActive ? styles.active : styles.item;

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink to='/profile' className={styleActive}>Profile</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/messages' className={styleActive}>Messages</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/news' className={styleActive}>News</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/music' className={styleActive}>Music</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='settings' className={styleActive}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
