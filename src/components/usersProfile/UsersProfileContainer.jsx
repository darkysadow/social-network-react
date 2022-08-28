import React from "react";
import UsersProfile from "./UsersProfile";
import { connect } from 'react-redux';

class UsersProfileContainer extends React.Component {
    render() {
        return (
            <div className="container">
                <UsersProfile />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userInfo: state.usersPage.user
    }
    
}

export default connect(mapStateToProps)(UsersProfileContainer);