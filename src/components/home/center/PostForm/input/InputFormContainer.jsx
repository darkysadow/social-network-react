import { addPost, setNewPostText } from "../../../../../redux/home-reducer";
import InputForm from "./InputForm";
import { connect } from "react-redux";
import { getNewPostText } from "../../../../../redux/home-selectors";

const mapStoreToProps = (state) => {
    return {
        newPostText: getNewPostText(state)
    }
}

const InputFormContainer = connect(mapStoreToProps, {setNewPostText, addPost})(InputForm);

export default InputFormContainer;