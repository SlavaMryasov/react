import Land from "./Landscape-Color.jpg";
import Cat from "./cat.jpg";
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <img className={styles.land} src={Land} alt="land" />
      </div>
      <div>
        <img className={styles.CatImg} src={Cat} alt="cat" />
        ava +description
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
