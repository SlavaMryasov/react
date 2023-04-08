
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { createNewPostActionCreator, changeNewPostTextActionCreator } from "../../../../redux/profileReducer";


const MyPosts = (props) => {
  const posts = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />);


  const addNewPost = (event) => {
    let text = event.target.value
    let action = createNewPostActionCreator(text)
    props.dispatch(action);
  }

  const flux = (event) => {
    let newSymbol = event.target.value;
    let action = changeNewPostTextActionCreator(newSymbol)
    props.dispatch(action);
  }

  return (
    <div className={styles.postBlock}>
      My posts
      <div>
        <textarea onChange={flux}  value={props.newPostText} />
        <button onClick={addNewPost}  value={props.newPostText}  className="add">Add post</button>
      </div>
      <div className={styles.posts} id='myPost'>
        {posts}
      </div>
    </div>
  );
};

export default MyPosts;
