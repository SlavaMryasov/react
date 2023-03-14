import { NavLink } from 'react-router-dom';
import styles from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={props.id} className={styles.text}>{props.userName}</NavLink>
        </div>
    )
}

export default Dialog;