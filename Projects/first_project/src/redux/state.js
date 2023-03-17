const state = {
    profilePage: {
        postsData: [
            { id: '1', message: 'Hello World', likesCount: 12 },
            { id: '2', message: 'It is my first comment', likesCount: 22 },
            { id: '3', message: 'Lalalala', likesCount: 52 },
            { id: '4', message: 'Good information', likesCount: 2 },
            { id: '5', message: 'I am OK', likesCount: 12 },]
    },
    messagesPage: {
        usersData: [
            { id: "1", userName: "Вася Жопов" },
            { id: "2", userName: "Света Коряга" },
            { id: "3", userName: "Дима Печенег" },
            { id: "4", userName: "Оля Пупкина" },
            { id: "5", userName: "Катя Абобова" },
            { id: "6", userName: "Олег Олегов" }],
        messagesData: [
            { id: "1", message: "Hi", messageSender: 'Вася Жопов', avatarImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY3OVjo3zVVtxT49NffuvrFLTyw7cgDw_Etw&usqp=CAU"},
            { id: "2", message: "Hello", messageSender: 'Me', avatarImg: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg" },
            { id: "3", message: "How are you?", messageSender: 'Вася Жопов', avatarImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY3OVjo3zVVtxT49NffuvrFLTyw7cgDw_Etw&usqp=CAU"},
            { id: "4", message: "Fine! And You?", messageSender: 'Me', avatarImg: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"},
            { id: "5", message: "I am OK", messageSender: 'Вася Жопов', avatarImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY3OVjo3zVVtxT49NffuvrFLTyw7cgDw_Etw&usqp=CAU" },
            { id: "6", message: "Fine! And You?", messageSender: 'Me', avatarImg: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"},]
    },
}

export default state;