import React from "react";
import { connect } from "react-redux";
import { follow, getUsers, unfollow, toggleIsFetching } from "../../redux/users-reducer";
import Users from "./Users";
//import { serverUsersData } from "../../server-immitator/users-page";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(1);
    }
    render() {
        return (
            <div className="container">    
        <Users users={this.props.users} isFetching={this.props.isFetching} follow={this.props.follow} unfollow={this.props.unfollow} getUsers={this.props.getUsers} toggleIsFetching={this.props.toggleIsFetching}/>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {follow, unfollow, getUsers, toggleIsFetching})(UsersContainer);