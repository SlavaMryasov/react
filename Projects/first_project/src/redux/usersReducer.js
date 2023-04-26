// чистая функция, которая принимает state и action, если state изменился с помощью action , возвращается новый state
import me from './Untitled.png'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialStore = {
  users: [
    { id: 1, fullName: 'Slava Mryasov', followed: true, status: 'Just do it!!!', location: { city: 'Kazan', country: 'Russia' }, photoURL: me },
    { id: 2, fullName: 'Oleg Olegovich', followed: false, status: 'Just do it!!!', location: { city: 'Kazan', country: 'Russia' }, photoURL: me },
    { id: 3, fullName: 'Biba Bobov', followed: true, status: 'Just do it!!!', location: { city: 'Kazan', country: 'Russia' }, photoURL: me },
  ]
}


let usersReducer = (state = initialStore, action) => {
  switch (action.type) {
    case FOLLOW:{ // если case равен FOLLOW, то тогда мы должны взять какого то пользователя 
      return {  // модифицировать можно только копию объекта state - ЭТО УЖЕ КОПИЯ
        ...state,      // копировть только дочерний не выйдет, родители тоже должны быть скопированы
        users: state.users.map(user => {  // создаем копию массива, потому что внутри массива мы тоже кого то будем менять, map возращет новый массив на основе старого массива,
          //мы говорим, приходит один user, делаем его копию  
          if (user.id === action.userId) { // если id юзера равен id юзера, которого нужно зафоловить(сидит в action)
            return { ...user, followed: true } // возвращаем копию юзера и followed меняем на true               ЕСЛИ ID СОВПАДАЕТ - ОЗРАЩАЕМ КОПИЮ, ЕСЛИ НЕТ, ВОЗРАЩАЕМ ТОЖЕ САМОЕ
          }
          return user // возврааем user, если он не поменялся
        })
      }}
    case UNFOLLOW:{
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return user
        })
      }}
      case SET_USERS:{
        return{
          ...state, users: [...state.users, ...action.users] // берем старых юзеров из state и дописывам к ним юзеров, которые пришли в action (склеиваем)
        }}
    default: return state
  }
}

export const followAC = (userId) => ({  // чистая функция которая возвращает экшен, что бы зафоловить кого то нам нужно знать кого, поэтому userID, в actionCreator придет как параметр
  type: FOLLOW, userId
})

export const unfollowAC = (userId) => ({
  type: UNFOLLOW, userId
})

export const setUsersAC = (users) => ({ // с сервака придут юзеры и мы их засетм в state
  type: SET_USERS, users
})


export default usersReducer;

// reducer - это функция, через которую идет модификация state 