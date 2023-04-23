const CREATE_NEW_MESS = 'createNewMess';
const CHANGE_NEW_MESS_TEXT = 'changeNewMessText';


let initialStore ={
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
}


const messageReducer = (state = initialStore, action) => {
    switch (action.type) {
        case CHANGE_NEW_MESS_TEXT: 
            return {
                ...state,
                newMessageText: action.symbol
            }
            
        case CREATE_NEW_MESS:
            let newMess = { id: 7, message: action.messageText, messageSender: 'Me', avatarImg: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg" }
            return {
                ...state,
                messagesList: [...state.usersData[0].messagesList, newMess],
                newMessageText : '',
            }
        default:
            return state
    }
}

export const createNewMessActionCreator = (text) => ({
    type: CREATE_NEW_MESS,
    messageText: text,
});
export const changeNewMessTextActionCreateor = (newSymbol) => ({
    type: CHANGE_NEW_MESS_TEXT,
    symbol: newSymbol
})

export default messageReducer;