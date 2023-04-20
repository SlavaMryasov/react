import { changeNewMessTextActionCreateor, createNewMessActionCreator } from '../../../redux/messageReducer';
import Messages from './Messages';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {//state взяли из store в котором лежит и state и dispatch
    return {
        messagesPage: state.messagesPage,
        newMessageText: state.newMessageText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addChangeTextContainer: (text) => {
            dispatch(createNewMessActionCreator(text)); // dispatch пишел из пропсов(пришел от state, в стейте так же лежит store)
        },
        addNewMessContainer: (newSymbol) => {
            dispatch(changeNewMessTextActionCreateor(newSymbol));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages) // во второй вызов кидаем данные для компоненты Messages


export default MessagesContainer;