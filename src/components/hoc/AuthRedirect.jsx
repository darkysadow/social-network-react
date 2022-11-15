import React from "react";
import { Navigate } from "react-router-dom";

export const withAuthRedirect = (Component) => {
    /*let ComponentWithAuthRedirect = (props) => {
        if(!props.isAuth) return <Navigate to={'/login'}/>
        return <Component {...props} />
    }*/
    class ComponentWithAuthRedirect extends React.Component {
        render() {
            this.props.checkAuthMe();
            if(!this.props.isAuth) {return <Navigate to={'/login'}/>}

            return <Component {...this.props} />
        }
    }
    return ComponentWithAuthRedirect;
}