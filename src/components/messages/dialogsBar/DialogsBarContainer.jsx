import { connect } from "react-redux";
import DialogsBar from "./DialogsBar"

/*const DialogsBar = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let dialogsData = store.getState().messagesPage.dialogsData;
                    let dialogs = dialogsData.map(d => (<Dialog avatar={d.ava} name={d.name} surname={d.surname} lastMessage={d.lastMessage} id={d.id} />));
                    return (<div className={s.messagesLeft}>
                        <div className={`${s.messagesBar} ${BlockStyles.blockShadow} ${BlockStyles.blockMargin}`}>
                            <BlockTitle Classname={s.messagesBar__title} Text="Dialogs" />
                            <div className={s.messagesList}>
                                {dialogs}
                            </div>
                        </div>
                    </div>);
                }
            }
        </StoreContext.Consumer>
    )

}*/

const mapStoreToProps = (state) => {
    return {
        dialogsData: state.messagesPage.dialogsData
    }
}

const DialogsBarContainer = connect(mapStoreToProps)(DialogsBar);

export default DialogsBarContainer;