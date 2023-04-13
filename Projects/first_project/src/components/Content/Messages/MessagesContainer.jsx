import { changeNewMessTextActionCreateor, createNewMessActionCreator } from '../../../redux/messageReducer';
import Messages from './Messages';


const MessagesContainer = (props) => {

    const addNewMessContainer = (text) => {
        let action = createNewMessActionCreator(text)
        props.dispatch(action);
    }

    const addChangeTextContainer = (newSymbol) => {
        let action = changeNewMessTextActionCreateor(newSymbol)
        props.dispatch(action);
    }

    return (
        <Messages addChangeTextContainer={addChangeTextContainer} addNewMessContainer={addNewMessContainer} messagesPage={props.messagesPage} newMessageText={props.newMessageText} />
    );
}

export default MessagesContainer;