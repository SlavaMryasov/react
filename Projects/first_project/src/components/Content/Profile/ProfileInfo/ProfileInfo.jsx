import styles from './ProfileInfo.module.css';
import Cat from "./cat.jpg";
import Land from "./Landscape-Color.jpg";

const ProfileInfo = () => {
    return (
        <div>
            <div>
            <img className={styles.land} src={Land} alt="land" />
            </div>
            <div>
            <img className={styles.descriptionBlock} src={Cat} alt="cat" />
            ava +description
            </div>
        </div>
    )
}

export default ProfileInfo;