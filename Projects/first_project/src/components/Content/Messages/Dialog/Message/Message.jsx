import styles from './Message.module.css';

const pinningMessage = messagesData => messagesData.messageSender === 'Me' ? styles.myMessage : styles.message;
const location = loc => loc.messageSender === 'Me' ? styles.d : styles.s;
// const avatar = avatar => avatar.avatarImg != undefined ? styles.avatar : styles.avaNone

const Message = (props) => {
    console.log('sasasa',props.message)
    return <div className={location({ messageSender: props.messageSender })}>
        <div className={pinningMessage({ messageSender: props.messageSender })}
            messageSender={props.messageSender}><b>{props.message}</b><img src={props.avatarImg}/>
        </div>
    </div>
}

export default Message;