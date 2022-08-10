import React from 'react';
import { connect } from 'react-redux';
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
        messagesData: state.messagesPage.messagesData,
        userMessagesData: state.messagesPage.userMessagesData
    }
}

export default connect(mapStateToProps)(MessagesFieldContainer);