const CREATE_NEW_POST = 'createNewPost';
const CHANGE_NEW_POST_TEXT = 'changeNewPostText';

let initialStore ={
    postsData: [
        { id: '1', message: 'Hello World', likesCount: 12 },
        { id: '2', message: 'It is my first comment', likesCount: 22 },
        { id: '3', message: 'Lalalala', likesCount: 52 },
        { id: '4', message: 'Good information', likesCount: 2 },
        { id: '5', message: 'I am OK', likesCount: 12 },],
    newPostText: '',
}


const profileReducer = (state = initialStore, action) => {
    switch (action.type) {
        case CREATE_NEW_POST:
            let newPost = { id: 6, message: action.textPost, likesCount: 0 }
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;

        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.symbol;
            return state;

        default:
            return state;
    }
}

export const createNewPostActionCreator = (text) => ({
    type: CREATE_NEW_POST,
    textPost: text,
})

export const changeNewPostTextActionCreator = (newSymbol) => ({
    type: CHANGE_NEW_POST_TEXT,
    symbol: newSymbol,
})


export default profileReducer;