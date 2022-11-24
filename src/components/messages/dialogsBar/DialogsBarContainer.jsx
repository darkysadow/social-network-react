import React from "react";
import { connect } from "react-redux";
import { setDialogsData } from "../../../redux/messages-reducer";
import {getDialogsData} from '../../../redux/messages-selectors';
import DialogsBar from "./DialogsBar"

import ava1 from './../../../img/pages8.jpg';
import ava2 from './../../../img/pages5.jpg';
import ava3 from './../../../img/pages7.jpg';
import ava4 from './../../../img/pages6.jpg';
import ava5 from './../../../img/pages9.jpg';

class DialogsBarContainer extends React.Component {
    //Тіпа робимо get запит діалогів на сервер
    //А це тіпа респонс
    dialogs = [
        { name: "billy", surname: "herrington", ava: ava1, lastMessage: "Let`s celebrate...", id: 'user1' },
        { name: "petro", surname: "mostavchuk", ava: ava2, lastMessage: "Aleksiyk Yana!", id: 'user2' },
        { name: "chistiy", surname: "syodnya", ava: ava3, lastMessage: "I`m clear now near you", id: 'user3' },
        { name: "victor", surname: "korneplod", ava: ava4, lastMessage: "Я тебя настигну", id: 'user4' },
        { name: "kama", surname: "pulya", ava: ava5, lastMessage: "Leave the shit", id: 'user5' }
    ];
    //тяжко без свого серверу :(
        
    componentDidMount(){
        if(this.props.dialogsData.length === 0) {
            this.props.setDialogsData(this.dialogs);
        }
    }
    render() {
        return (
            <DialogsBar dialogsData={this.props.dialogsData}/>
        )
    }
}

const mapStoreToProps = (state) => {
    return {
        dialogsData: getDialogsData(state)
    }
}

export default connect(mapStoreToProps, {setDialogsData})(DialogsBarContainer);