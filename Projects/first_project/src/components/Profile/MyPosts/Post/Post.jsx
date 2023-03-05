import styles from "./Post.module.css";
import Avatar from "./ava.png";

const Post = (props) => {
  console.log(props.message);
 //debugger; 
 return (
<div className={`${styles.item} ${styles.active}`}>
      <img className={styles.avatar} src={Avatar} alt="avatar" />     
      <div>
      <span>like</span>
      </div>
    </div>
  );
};

export default Post;
