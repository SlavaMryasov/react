import styles from "./Post.module.css";
import Avatar from "./ava.png";

const Post = (props) => {

 return (
<div className={styles.item}>
      <img className={styles.avatar} src={Avatar} alt="avatar" />  
      {props.message}   
      <div>
      <span>like {props.likesCount}</span> 
      </div>
    </div>
  );
};

export default Post;
