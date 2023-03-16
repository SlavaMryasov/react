import styles from "./MyPosts.module.css";
import Post from "./Post/Post";





   const MyPosts = (props) => {
    const posts = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
  return (
    <div className={styles.postBlock}>
      My posts
      <div>
        <textarea></textarea>
        <button className="add">Add post</button>
      </div>
      <div className={styles.posts} id='myPost'>
        {posts}
      </div>
    </div>
  );
};

export default MyPosts;
