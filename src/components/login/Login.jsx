import React from "react";
import { connect } from "react-redux";
import s from "./Login.module.css";

class Login extends React.Component {
    render() {
        return (<div className="container">
            <div className={s.formContainer}>
                <div className={s.inputsContainer}>
                    <div className={s.inputLogin}><input type="text" placeholder="Login"/></div>
                    <div className={s.inputPassword}><input type="password" placeholder="Password"/></div>
                    <div className={s.buttonsContainer}>
                        <div className={s.buttonLogin}><button>login</button></div>
                        <div className={s.buttonRegister}><button>register</button></div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default connect()(Login);