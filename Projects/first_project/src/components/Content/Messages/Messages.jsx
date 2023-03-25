import Dialog from './Dialog/Dialog';
import Message from './Dialog/Message/Message';
import styles from './Messages.module.css';
import stylesDialog from './Dialog/Dialog.module.css';
import stylesMessage from './Dialog/Message/Message.module.css';
import { createRef } from 'react';



const Messages = (props) => {
    const usersElements = props.messagesPage.usersData.map(users => <Dialog className={styles.link} userName={users.userName} id={users.id} />)
    const messagesElements = props.messagesPage.usersData.map(user => user.messagesList.map(messages => <Message message={messages.message} messageSender={messages.messageSender} avatarImg={messages.avatarImg} />))
    
    const refTextarea = createRef();
    const addNewMess = () =>{
        let text = refTextarea.current.value;
        props.createNewMess(text);
    }

    const addChangeText = () =>{
        let newSymbol = refTextarea.current.value;
        props.changeNewMessText(newSymbol);
    }

    return (
        <div className={styles.messages}>
            <div className={stylesDialog.dialogs}>
                {usersElements}
            </div>
            <div className={stylesMessage.dialogOpen}>
                {messagesElements}
                <div className={styles.newMessageBlock}>
                    <textarea onChange={addChangeText} ref={refTextarea} value={props.messagesPage.newMessageText} className={styles.newMessage} />
                    <button onClick={addNewMess}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;