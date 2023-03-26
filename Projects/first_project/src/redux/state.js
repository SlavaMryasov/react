let rerender = () => {
   
}

const state = {
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
}

export const createNewPost = (textPost) => {
    let newPost = { id: 6, message: textPost, likesCount: 0 }
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerender(state);
}

export const changeNewPostText = (symbol) => {
    state.profilePage.newPostText = symbol;
    rerender(state);
}

export const createNewMess = (messageText) => {
    let newMess = { id: 7, message: messageText, messageSender: 'Me', avatarImg: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg" }
    state.messagesPage.usersData[0].messagesList.push(newMess);
    state.messagesPage.newMessageText = ''
    rerender(state);
}

export const changeNewMessText = (symbol) => {
    state.messagesPage.newMessageText = symbol;
    rerender(state);
}

export const subscribe = (observer) =>{
    rerender= observer;
}


export default state;