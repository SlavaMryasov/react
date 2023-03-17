import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
  return (
    <div className={styles}>
      <ProfileInfo/>
      <MyPosts postsData={props.profilePage.postsData}/>
    </div>
  );
};

export default Profile;
