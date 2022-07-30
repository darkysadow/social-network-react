import React from "react";
import { addPostActionCreator, setNewPostTextActionCreator } from "../../../../../redux/home-reducer";
import InputForm from "./InputForm";

const InputFormContainer = (props) => {
    let newPostText = props.store.getState().homePage.newPostText;
    let addPost = () => {
        props.store.dispatch(addPostActionCreator('2 minutes ago')) /*addPost('2 minutes ago')*/;
        props.store.dispatch(setNewPostTextActionCreator(''))/*setNewPostText("")*/;
    }
    let onTextChange = (text) => {
        props.store.dispatch(setNewPostTextActionCreator(text))/*setNewPostText(text)*/;
    }
    return (<InputForm field={props.field} buttonText={props.buttonText} newPostText={newPostText} addPost={addPost} onTextChange={onTextChange}/>);
}

export default InputFormContainer;