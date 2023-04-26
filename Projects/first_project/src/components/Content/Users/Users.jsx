import styles from './Users.module.css'

const Users = (props) => {
  return <div>
    {
      props.users.map (user => <div key={user.id}>
        <div>
          <div>
            <img src={user.photoURL}  className={styles.img}/>
          </div>
          <span>
            {user.followed 
            ? <button onClick={()=>{props.unfollow(user.id)}}>UnFollow</button>
            :<button onClick={()=>{props.follow(user.id)}}>Follow</button>}
            
          </span>
        </div>
        <div>
          <span>
            <div>{user.fullname}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <span>{user.location.country} </span>
            <span>{user.location.city}</span>
          </span>
        </div>
      </div>)
    }
  </div>
}
export default Users;
