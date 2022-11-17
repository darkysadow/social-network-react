import React from "react";
import { Field, Form } from "react-final-form";
import { connect } from "react-redux";
import s from "./Login.module.css";
import { loginUser } from "../../redux/auth-reducer";
import Preloader from "../common/Preloader";
import { Navigate } from "react-router-dom";

class Login extends React.Component {
    componentDidMount(){
    }
    onSubmit = (values) => {
        this.props.loginUser(values.loginInputLogin, values.passwordInputLogin, values.checkboxLogin);
    }
    render() {
        if(!this.props.isAuth){
        return (
        <div className="container">
            <div className={s.formContainer}>
                <Form onSubmit={this.onSubmit}>
                    {props => (
                        <form onSubmit={props.handleSubmit}>
                            <div className={s.label}><p>You are not logged in</p></div>
                            <div className={s.inputsContainer}>
                                <div className={s.inputLogin}>
                                    {/*<input type="text" placeholder="Login"/>*/}
                                    <Field 
                                        name="loginInputLogin" 
                                        component='input'
                                        type="email"
                                        placeholder='Email'
                                    />
                                </div>
                                <div className={s.inputPassword}>
                                    {/*<input type="password" placeholder="Password"/>*/}
                                    <Field 
                                        name="passwordInputLogin" 
                                        component='input'
                                        type="password"
                                        placeholder='Password'
                                    />
                                </div>
                                <div className={s.checkboxRemember}>
                                    <Field 
                                        name="checkboxLogin"
                                        component="input"
                                        type="checkbox"
                                    />
                                    <p>Запам'ятати мене</p>
                                </div>
                                <div className={s.buttonsContainer}>
                                    <div className={s.buttonLogin}>
                                        <button type="submit">login</button>
                                    </div>
                                    <div className={s.buttonRegister}>
                                        <button>register</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}

                </Form>
            </div>
        </div>
    )} else if (this.props.isAuth) {
        return (<Navigate to='/home' />);
    }
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuthorized,
    userId: state.auth.userId,
    login: state.auth.login,
    email: state.auth.email
})

export default connect(mapStateToProps, { loginUser })(Login);

/*const onSubmit = (values) => {
    console.log(values)
    alert(values.loginInput)
}

const LoginForm = (props) => {
    return (
        <div className="container">
            <div className={s.formContainer}>
                <Form onSubmit={onSubmit}>
                    {props => (
                        <form onSubmit={props.handleSubmit}>
                            <div className={s.label}><p>You are not logged in</p></div>
                            <div className={s.inputsContainer}>
                                <div className={s.inputLogin}>
                                    
                                    <Field 
                                        name="loginInputLogin" 
                                        component='input'
                                        type="email"
                                        placeholder='Email'
                                    />
                                </div>
                                <div className={s.inputPassword}>
                                    
                                    <Field 
                                        name="passwordInputLogin" 
                                        component='input'
                                        type="password"
                                        placeholder='Password'
                                    />
                                </div>
                                <div className={s.checkboxRemember}>
                                    <Field 
                                        name="checkboxLogin"
                                        component="input"
                                        type="checkbox"
                                    />
                                    <p>Запам'ятати мене</p>
                                </div>
                                <div className={s.buttonsContainer}>
                                    <div className={s.buttonLogin}>
                                        <button type="submit">login</button>
                                    </div>
                                    <div className={s.buttonRegister}>
                                        <button>register</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}

                </Form>
            </div>
        </div>
    )
}*/
