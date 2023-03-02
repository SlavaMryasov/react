import Land from "./Landscape-Color.jpg";
import Cat from "./cat.jpg";
import './Profile.module.css';
import styles from './Profile.module.css'

const Profile = () => {
    return (
        <div className={styles.content}>
        <div>
        <img className={styles.land} src={Land} alt='land' />
        </div>
        <div>
        <img class={styles.CatImg} src={Cat} alt='cat' />
        ava +description
        </div>
        <div>
        My posts
        <div>
            New post
        </div>
        <div className="posts">
            <div className={`${styles.item} ${styles.active}`}>
            post 1
            </div>
            <div className={styles.item}>
            post 2
            </div>
        </div>
        </div>
    </div>)
}

export default Profile;