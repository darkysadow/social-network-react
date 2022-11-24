import React from 'react';
import { connect } from 'react-redux';
import { getMessagesData, getUserMessagesData } from '../../../redux/messages-selectors';
import MessagesField from "./MessagesField";

class MessagesFieldContainer extends React.Component {
    render(){
        return (
            <MessagesField messagesData={this.props.messagesData} userMessagesData={this.props.userMessagesData}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messagesData: getMessagesData(state),
        userMessagesData: getUserMessagesData(state)
    }
}

export default connect(mapStateToProps)(MessagesFieldContainer);