import React from "react";
import s from './../Header.module.css';
import lupa from './../../../img/za.png';
import { compose } from "redux";
import { connect } from "react-redux";
import { checkAuthMe } from "../../../redux/auth-reducer";
import { logoutUser } from "../../../redux/auth-reducer";
import { NavLink } from "react-router-dom";

class UserSearch extends React.Component {
    state = {
        dropDownOpened: false
    }
    defaultAvatar = 'https://png.pngitem.com/pimgs/s/30-307318_camera-circle-youtube-icon-black-hd-png-download.png'
    componentDidMount() {
        this.props.checkAuthMe();
    }
    showUserBar = () => {
        if(this.state.dropDownOpened) {
            this.setState({
                dropDownOpened: false
            })
        } else {
        this.setState({
            dropDownOpened: true
        })
    }
    }
    render() {
        if (!this.props.isAuth) {
            return (<div className={s.userSearch}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>)
        } else {
            return (
                <div className={s.userSearch}>
                    <div className={s.form}>
                        <div className={s.form_search}>
                            <input type="text" placeholder='Search...' />
                        </div>
                        <div className={s.form_button}>
                            <input type="image" alt="Search" src={lupa} width='20px' height='20px' />
                        </div>
                    </div>
                    <div className={s.profile} onClick={this.showUserBar}>
                        <div className={s.profile_image} >
                            <img src={!this.props.avatar?this.defaultAvatar:this.props.avatar} alt="" width="30px" height="30px" />
                        </div>
                    </div>
                {!this.state.dropDownOpened?"":
                <div className={s.dropDown}>
                    <div className={s.userNickname}>
                        <p>{this.props.login}</p>
                    </div>
                    <ul className={s.dropDownItemList}>
                        <li onClick={() => {
                            this.props.logoutUser();
                            this.showUserBar();  
                            }}>Log Out</li>
                    </ul>
                </div>
                }
                </div>
            )
        }
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuthorized,
        login: state.auth.login,
        avatar: state.auth.avatar
    }
}
export default compose(
    connect(mapStateToProps, { checkAuthMe , logoutUser})
)(UserSearch)