import { sendMessageActionCreator, setNewMessageTextActionCreator } from "../../../../redux/messages-reducer";
import InputMessageArea from "./InputMessageArea";
import { connect } from 'react-redux';
import React from "react";

class InputMessageAreaContainer extends React.Component {
    render() {
        return (
            <InputMessageArea newMessageText={this.props.newMessageText} sendMsg={this.props.sendMsg} onTextChange={this.props.onTextChange}/>
        )
    }
}

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

export default connect(mapStoreToProps, mapDispatchToProps)(InputMessageAreaContainer);