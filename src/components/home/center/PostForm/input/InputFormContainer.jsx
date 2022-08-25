import { addPost, setNewPostText } from "../../../../../redux/home-reducer";
import InputForm from "./InputForm";
import { connect } from "react-redux";

const mapStoreToProps = (state) => {
    return {
        newPostText: state.homePage.newPostText
    }
}

const InputFormContainer = connect(mapStoreToProps, {setNewPostText, addPost})(InputForm);

export default InputFormContainer;