import React from "react";
import { Navigate } from "react-router-dom";

export const withAuthRedirect = (Component) => {
    class ComponentWithAuthRedirect extends React.Component {
        render() {
            this.props.checkAuthMe();
            if(!this.props.isAuth) {return <Navigate to={'/login'}/>}

            return <Component {...this.props} />
        }
    }
    return ComponentWithAuthRedirect;
}