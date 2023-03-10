import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

   const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button className="add">Add post</button>
      </div>
      <div className={styles.posts} id='myPost'>
        <Post message='Hello World!' likesCount= '0'/>
        <Post message="It's my first comment" likesCount = '12'/>
      </div>
    </div>
  );
};

export default MyPosts;
