import React from "react";
import { connect } from "react-redux";
import DialogsBar from "./DialogsBar"

class DialogsBarContainer extends React.Component {
    render() {
        return (
            <DialogsBar dialogsData={this.props.dialogsData}/>
        )
    }
}

const mapStoreToProps = (state) => {
    return {
        dialogsData: state.messagesPage.dialogsData
    }
}

export default connect(mapStoreToProps)(DialogsBarContainer);