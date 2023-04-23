
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
  const posts = props.postsData.map(post => <Post message={post.message} key={post.id} likesCount={post.likesCount} />);


  const addNewPost = (event) => {
    let text = event.target.value;
    props.addNewPostContainer(text);
  }

  const flux = (event) => {
    let newSymbol = event.target.value;
    props.fluxContainer(newSymbol)
  }

  return (
    <div className={styles.postBlock}>
      My posts
      <div>
        <textarea onChange={flux} value={props.newPostText} />
        <button onClick={addNewPost} value={props.newPostText} className="add">Add post</button>
      </div>
      <div className={styles.posts} id='myPost'>
        {posts}
      </div>
    </div>
  );
};

export default MyPosts;
