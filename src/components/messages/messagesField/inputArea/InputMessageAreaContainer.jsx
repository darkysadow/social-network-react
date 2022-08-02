import { sendMessageActionCreator, setNewMessageTextActionCreator } from "../../../../redux/messages-reducer";
import InputMessageArea from "./InputMessageArea";
import { connect } from 'react-redux';

/*const InputMessageAreaContainer = (props) => {
    let sendMsg = () => {
        props.store.dispatch(sendMessageActionCreator())/*sendMessage();
        props.store.dispatch(setNewMessageTextActionCreator(''))/*setNewMessageText('');
    };
    let onTextChange = (text) => {
        props.store.dispatch(setNewMessageTextActionCreator(text))/*setNewMessageText(text);
    };
    return (<InputMessageArea sendMessage={sendMsg} onTextChange={onTextChange} newMessageText={props.messagesPage.newMessageText}/>);
}*/

const mapStoreToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        sendMsg: () => {
            dispatch(sendMessageActionCreator());
        },
        onTextChange: (text) => {
            dispatch(setNewMessageTextActionCreator(text));
        }
    }
}

const InputMessageAreaContainer = connect(mapStoreToProps, mapDispatchToProps)(InputMessageArea);

export default InputMessageAreaContainer;