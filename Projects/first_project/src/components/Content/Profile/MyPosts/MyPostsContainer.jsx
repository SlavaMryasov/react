import { createNewPostActionCreator, changeNewPostTextActionCreator } from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPostContainer: (text) => {
      dispatch(createNewPostActionCreator(text))
    },
    fluxContainer: (newSymbol) => {
      dispatch(changeNewPostTextActionCreator(newSymbol))
    }
  }
}

const MyPostsContainer = connect( mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;