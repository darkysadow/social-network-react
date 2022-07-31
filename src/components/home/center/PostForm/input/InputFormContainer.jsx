import React from "react";
import { addPostActionCreator, setNewPostTextActionCreator } from "../../../../../redux/home-reducer";
import InputForm from "./InputForm";
import { connect } from "react-redux";

/*const InputFormContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let newPostText = store.getState().homePage.newPostText;
                    let addPost = () => {
                        store.dispatch(addPostActionCreator('2 minutes ago'));
                        store.dispatch(setNewPostTextActionCreator(''));
                    }
                    let onTextChange = (text) => { store.dispatch(setNewPostTextActionCreator(text)); }
                    return (<InputForm field={props.field} buttonText={props.buttonText} newPostText={newPostText} addPost={addPost} onTextChange={onTextChange} />);
                }

            }

        </StoreContext.Consumer>
    )
}*/

const mapStoreToProps = (state) => {
    return {
        newPostText: state.homePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator('2 minutes ago'));
        },
        onTextChange: (text) => {
            dispatch(setNewPostTextActionCreator(text));
        }
    }
}

const InputFormContainer = connect(mapStoreToProps, mapDispatchToProps)(InputForm);

export default InputFormContainer;