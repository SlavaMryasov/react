import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const postsData = [
  { id: '1', message: 'Hello World', likesCount: 12},
  { id: '2', message: 'It is my first comment', likesCount: 22},
  { id: '3', message: 'Lalalala', likesCount: 52},
  { id: '4', message: 'Good information', likesCount: 2},
  { id: '5', message: 'I am OK', likesCount: 12},
];

const posts = postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

   const MyPosts = () => {
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
