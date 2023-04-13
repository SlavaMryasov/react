import Dialog from './Dialog/Dialog';
import Message from './Dialog/Message/Message';
import styles from './Messages.module.css';
import stylesDialog from './Dialog/Dialog.module.css';
import stylesMessage from './Dialog/Message/Message.module.css';


const Messages = (props) => {
    const usersElements = props.messagesPage.usersData.map(users => <Dialog className={styles.link} userName={users.userName} id={users.id} />)
    const messagesElements = props.messagesPage.usersData.map(user => user.messagesList.map(messages => <Message message={messages.message} messageSender={messages.messageSender} avatarImg={messages.avatarImg} />))


    const addNewMess = (event) => {
        let text = event.target.value;
        props.addNewMessContainer(text)
    }

    const addChangeText = (event) => {
        let newSymbol = event.target.value;
        props.addChangeTextContainer(newSymbol)
    }

    return (
        <div className={styles.messages}>
            <div className={stylesDialog.dialogs}>
                {usersElements}
            </div>
            <div className={stylesMessage.dialogOpen}>
                {messagesElements}
                <div className={styles.newMessageBlock}>
                    <textarea onChange={addChangeText} value={props.messagesPage.newMessageText} className={styles.newMessage} />
                    <button onClick={addNewMess} value={props.messagesPage.newMessageText}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;