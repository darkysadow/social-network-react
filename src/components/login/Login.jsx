import React from "react";
import { Field, Form } from "react-final-form";
import { connect } from "react-redux";
import s from "./Login.module.css";
import { loginUser, checkAuthMe } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import { Input } from "../../utillites/FormValidators/FormControls";
import { composeValidators, maxLengthCreator, required } from "../../utillites/FormValidators/validators";
import { FORM_ERROR } from "final-form";

class Login extends React.Component {
    maxLength254 = maxLengthCreator(254)
    componentDidMount(){
    }
    componentWillUnmount(){
        this.props.checkAuthMe();
    }
    onSubmit = (values) => {
        this.props.loginUser(values.loginInputLogin, values.passwordInputLogin, values.checkboxLogin);
        if(this.props.errorMessages) {
            return { [FORM_ERROR]: this.props.errorMessages[0]}
        }
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
                                    <Field 
                                        name="loginInputLogin" 
                                        component={Input}
                                        type="email"
                                        placeholder='Email'
                                        validate={composeValidators(required, this.maxLength254)}
                                    />
                                </div>
                                <div className={s.inputPassword}>
                                    <Field 
                                        name="passwordInputLogin" 
                                        component={Input}
                                        type="password"
                                        placeholder='Password'
                                        validate={required}
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
                                {props.submitError && <div className={s.submitError}>{props.submitError}</div>}
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
    email: state.auth.email,
    errorMessages: state.auth.errorMessages
})

export default connect(mapStateToProps, { loginUser, checkAuthMe })(Login);