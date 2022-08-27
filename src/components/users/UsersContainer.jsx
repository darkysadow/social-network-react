import React from "react";
import { connect } from "react-redux";
import { follow, setUsers, unfollow } from "../../redux/users-reducer";
import Users from "./Users";
import { serverUsersData } from "../../server-immitator/users-page";

class UsersContainer extends React.Component {
    componentDidMount() {
            let showedUsers = [];
            for(let i = 0; i<4; i++){
                showedUsers.push(serverUsersData[i]);
                console.log(showedUsers);
            }
            console.log(this.props.users.length);
            if(this.props.users.length === 0) {
                this.props.setUsers(showedUsers);
            }
    }
    render() {
        return (<Users users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow} setUsers={this.props.setUsers}/>)
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers})(UsersContainer);