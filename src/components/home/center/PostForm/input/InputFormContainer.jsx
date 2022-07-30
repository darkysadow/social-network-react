import React from "react";
import { addPostActionCreator, setNewPostTextActionCreator } from "../../../../../redux/home-reducer";
import StoreContext from "../../../../../redux/store-context";
import InputForm from "./InputForm";

const InputFormContainer = (props) => {
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
}

export default InputFormContainer;