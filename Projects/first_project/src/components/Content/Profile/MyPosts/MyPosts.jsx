import { createRef } from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = (props) => {
  const posts = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />);

  const refForTextarea = createRef();
  const addNewPost = () => {
    let text = refForTextarea.current.value;
    let action = {type: 'createNewPost', textPost: text}
    props.dispatch(action);
  }

  const flux = () => {
    let newSymbol = refForTextarea.current.value;
    let action = { type: 'changeNewPostText', symbol: newSymbol }
    props.dispatch(action);
  }

  return (
    <div className={styles.postBlock}>
      My posts
      <div>
        <textarea onChange={flux} ref={refForTextarea} value={props.newPostText} />
        <button onClick={addNewPost} className="add">Add post</button>
      </div>
      <div className={styles.posts} id='myPost'>
        {posts}
      </div>
    </div>
  );
};

export default MyPosts;
