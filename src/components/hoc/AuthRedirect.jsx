import React from "react";
import { Redirect } from "react-router";

export const withAuthRedirect = (Component) => {
    let ComponentWithAuthRedirect = (props) => {
        if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return <Component {...props} />
    }
    return ComponentWithAuthRedirect;
}