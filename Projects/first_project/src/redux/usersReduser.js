import me from './Untitled.png'
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLOWW';
const SET_USERS ='SET_USERS';


let initialStore = {
  users: [
    { id: 1, fullName: 'Slava Mryasov', followed: true, status: 'Just do it!!!', location: { city: 'Kazan', country: 'Russia' }, photoURL: me },
    { id: 2, fullName: 'Oleg Olegovich', followed: false, status: 'Just do it!!!', location: { city: 'Kazan', country: 'Russia' }, photoURL: me },
    { id: 3, fullName: 'Biba Bobov', followed: true, status: 'Just do it!!!', location: { city: 'Kazan', country: 'Russia' }, photoURL: me },
  ]
}

const usersReducer = (state = initialStore, action) => {
  switch (action.type) {
    case FOLLOW:{
      return {
        ...state,
         users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          }
          return user;
        })
      }}
    case UNFOLLOW:{
      return {
        ...state, users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return user;
        })
      }}
    case SET_USERS:{
      return{
        ...state, users: [...state.users, action.users]}
      }
      
      default: return state
  }
}




export const followAC = (userId) => ({
  type: FOLLOW, userId
})

export const unfollowAC = (userId) => ({
  type: UNFOLLOW, userId
})
export const setUsersAC =(users) =>({
  type: SET_USERS, users
})

export default usersReducer;