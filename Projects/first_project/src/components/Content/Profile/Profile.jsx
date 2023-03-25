import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={styles}>
      <ProfileInfo />
      <MyPosts postsData={props.profilePage.postsData} createNewPost ={props.createNewPost}
        newPostText={props.profilePage.newPostText}
        changeNewPostText ={props.changeNewPostText}/>
    </div>
  );
};

export default Profile;
