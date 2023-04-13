import { createNewPostActionCreator, changeNewPostTextActionCreator } from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

  const addNewPostContainer = (text) => {
    let action = createNewPostActionCreator(text)
    props.dispatch(action);
  }

  const fluxContainer = (newSymbol) => {
    let action = changeNewPostTextActionCreator(newSymbol)
    props.dispatch(action);
  }

  return (
    <MyPosts addNewPostContainer={addNewPostContainer} fluxContainer={fluxContainer} postsData={props.postsData} newPostText={props.newPostText} />
  );
};

export default MyPostsContainer;
