import Dialog from './Dialog/Dialog';
import Message from './Dialog/Message/Message';
import styles from './Messages.module.css';
import stylesDialog from './Dialog/Dialog.module.css';
import stylesMessage from './Dialog/Message/Message.module.css';

const Messages = (props) => {
    const usersElements = props.messagesPage.usersData.map(users => <Dialog className={styles.link} userName={users.userName} id={users.id} />)
    const messagesElements = props.messagesPage.messagesData.map(messages => <Message message={messages.message} messageSender={messages.messageSender} avatarImg={messages.avatarImg}/>)
    return (
        <div className={styles.messages}>
            <div className={stylesDialog.dialogs}>
                {usersElements}
            </div>
            <div className={stylesMessage.dialogOpen}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Messages;