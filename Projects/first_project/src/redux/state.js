const CREATE_NEW_POST = 'createNewPost';
const CHANGE_NEW_POST_TEXT = 'changeNewPostText';

let store = {
    _rerender() {

    },

    _state: {
        profilePage: {
            postsData: [
                { id: '1', message: 'Hello World', likesCount: 12 },
                { id: '2', message: 'It is my first comment', likesCount: 22 },
                { id: '3', message: 'Lalalala', likesCount: 52 },
                { id: '4', message: 'Good information', likesCount: 2 },
                { id: '5', message: 'I am OK', likesCount: 12 },],
            newPostText: '',
        },



        messagesPage: {
            usersData: [{
                id: "1", userName: "Вася Жопов", messagesList: [
                    { id: "1", message: "Hi", messageSender: 'Вася Жопов', avatarImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY3OVjo3zVVtxT49NffuvrFLTyw7cgDw_Etw&usqp=CAU" },
                    { id: "2", message: "Hello", messageSender: 'Me', avatarImg: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg" },
                    { id: "3", message: "How are you?", messageSender: 'Вася Жопов', avatarImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY3OVjo3zVVtxT49NffuvrFLTyw7cgDw_Etw&usqp=CAU" },
                    { id: "4", message: "Fine! And You?", messageSender: 'Me', avatarImg: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg" },
                    { id: "5", message: "I am OK", messageSender: 'Вася Жопов', avatarImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY3OVjo3zVVtxT49NffuvrFLTyw7cgDw_Etw&usqp=CAU" },
                    { id: "6", message: "Good)", messageSender: 'Me', avatarImg: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg" },],
            },

            { id: "2", userName: "Света Коряга", messagesList: [] },
            { id: "3", userName: "Дима Печенег", messagesList: [] },
            { id: "4", userName: "Оля Пупкина", messagesList: [] },
            { id: "5", userName: "Катя Абобова", messagesList: [] }, { id: "6", userName: "Олег Олегов", messagesList: [] }],
            newMessageText: '',
        },

    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._rerender = observer;
    },

    dispatch(action) {
        if (action.type === 'createNewPost') {
            let newPost = { id: 6, message: action.textPost, likesCount: 0 }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._rerender(this._state);
        }
        else if(action.type === 'changeNewPostText' ){
            this._state.profilePage.newPostText = action.symbol;
            this._rerender(this._state);
        }
        else if(action.type === 'createNewMess'){
            let newMess = { id: 7, message: action.messageText, messageSender: 'Me', avatarImg: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg" }
            this._state.messagesPage.usersData[0].messagesList.push(newMess);
            this._state.messagesPage.newMessageText = ''
            this._rerender(this._state);
        }
        else if(action.type === 'changeNewMessText'){
            this._state.messagesPage.newMessageText = action.symbol;
            this._rerender(this._state);
        }
    }
}


export const createNewPostActionCreator = (text) => ({
  type: CREATE_NEW_POST,
  textPost: text
})

export const changeNewPostTextActionCreator = (newSymbol) => ({
  type: CHANGE_NEW_POST_TEXT,
  symbol: newSymbol
})

export default store;