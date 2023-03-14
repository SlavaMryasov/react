import Dialog from './Dialog/Dialog';
import Message from './Dialog/Message/Message';
import styles from './Messages.module.css';
import stylesDialog from './Dialog/Dialog.module.css';
import stylesMessage from './Dialog/Message/Message.module.css';

const usersData = [
    { id: '1', userName: 'Вася Жопов', },
    { id: '2', userName: 'Света Коряга', },
    { id: '3', userName: 'Дима Печенег', },
    { id: '4', userName: 'Оля Пупкина', },
    { id: '5', userName: 'Катя Абобова', },
    { id: '6', userName: 'Олег Олегов', },
];

const usersElements = usersData.map(users => <Dialog className={styles.link} userName={users.userName} id={users.id} />)

const messagesData = [
    { id: '1', message: 'Hi', },
    { id: '2', message: 'Hello', },
    { id: '3', message: 'How are you?', },
    { id: '4', message: 'Fine! And You?', },
    { id: '5', message: 'I am OK', },
];

const messagesElements = messagesData.map(messages => <Message message={messages.message} />)

const Messages = () => {
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