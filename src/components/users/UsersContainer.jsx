import React from "react";
import { connect } from "react-redux";
import { follow, setUsers, unfollow, toggleIsFetching } from "../../redux/users-reducer";
import Users from "./Users";
import { serverUsersData } from "../../server-immitator/users-page";

class UsersContainer extends React.Component {
    componentDidMount() {
            let showedUsers = [];
            for(let i = 0; i<4; i++){
                showedUsers.push(serverUsersData[i]);
            }
            if(this.props.users.length === 0) {
                this.props.setUsers(showedUsers);
            }
    }
    render() {
        return (
            <div className="container">    
        <Users users={this.props.users} isFetching={this.props.isFetching} follow={this.props.follow} unfollow={this.props.unfollow} setUsers={this.props.setUsers} toggleIsFetching={this.props.toggleIsFetching}/>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, toggleIsFetching})(UsersContainer);