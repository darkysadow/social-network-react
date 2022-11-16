import React from "react";
import s from './../Header.module.css';
import lupa from './../../../img/za.png';
import face from './../../../img/face.jpg';
import { compose } from "redux";
import { connect } from "react-redux";
import { checkAuthMe } from "../../../redux/auth-reducer";
import { NavLink } from "react-router-dom";

{/*const UserSearch = () => {
    return (
        <div className={s.userSearch}>
            <div className={s.form}>
                <div className={s.form_search}>
                    <input type="text" placeholder='Search...' />
                </div>
                <div className={s.form_button}>
                    <input type="image" src={lupa} width='20px' height='20px' />
                </div>
            </div>
            <div className={s.profile}>
                <div className={s.profile_image}>
                    <img src={face} alt="" width="30px" height="30px" />
                </div>
            </div>
        </div>
    );
}

export default UserSearch;*/}

class UserSearch extends React.Component {
    componentDidMount() {
        this.props.checkAuthMe();
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
                            <input type="image" src={lupa} width='20px' height='20px' />
                        </div>
                    </div>
                    <div className={s.profile}>
                        <div className={s.profile_image}>
                            <img src={face} alt="" width="30px" height="30px" />
                        </div>
                    </div>
                </div>
            )
        }
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuthorized
    }
}
export default compose(
    connect(mapStateToProps, { checkAuthMe })
)(UserSearch)