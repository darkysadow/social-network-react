import { sendMessage, setNewMessageText } from "../../../../redux/messages-reducer";
import InputMessageArea from "./InputMessageArea";
import { connect } from 'react-redux';
import React from "react";
import { getNewMessageText } from "../../../../redux/messages-selectors";

class InputMessageAreaContainer extends React.Component {
    render() {
        return (
            <InputMessageArea newMessageText={this.props.newMessageText} sendMsg={this.props.sendMessage} onTextChange={this.props.setNewMessageText}/>
        )
    }
}

const mapStoreToProps = (state) => {
    return {
        newMessageText: getNewMessageText(state)
    }
}

export default connect(mapStoreToProps, {sendMessage, setNewMessageText})(InputMessageAreaContainer);