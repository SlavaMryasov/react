import styles from './Message.module.css';

const pinningMessage = messagesData => messagesData.messageSender === 'Me' ? styles.myMessage : styles.message;
const location = loc => loc.messageSender === 'Me' ? styles.d : styles.s;


const Message = (props) => {
    return <div className={location({ messageSender: props.messageSender })}>
        <div className={pinningMessage({ messageSender: props.messageSender })}>
            <div className={styles.text}>{props.message}</div><img src={props.avatarImg}/>
        </div>
    </div>
}

export default Message;