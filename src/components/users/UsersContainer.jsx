import React from "react";
import { connect } from "react-redux";
import { followUser, getUsers, unfollowUser, toggleIsFetching, nextPage, prevPage } from "../../redux/users-reducer";
import { changeAuthStatus, checkAuthMe } from "../../redux/auth-reducer";
import Users from "./Users";
import { authAPI } from "../../api/apiDAL";

class UsersContainer extends React.Component {
    componentDidMount() {
        authAPI.me().then(response => {
            if (response.data.resultCode == 1) {
                this.props.changeAuthStatus(false);
            } else if (response.data.resultCode == 0) {
                this.props.changeAuthStatus(true)
            }
        })
        this.props.getUsers(this.props.pageNumber);
    }
    nextPageButton = () => {
        this.props.nextPage();
    }
    prevPageButton = () => {
        this.props.prevPage();
    }
    componentDidUpdate(prevProps) {
        if (this.props.pageNumber !== prevProps.pageNumber) {
            this.props.getUsers(this.props.pageNumber)
        }
    }
    render() {
        if (this.props.isAuth==true) {
            return (
                <div className="container">
                    <Users users={this.props.users} pageNumber={this.props.pageNumber} isFetching={this.props.isFetching} totalUsers={this.props.totalUsers} follow={this.props.followUser} unfollow={this.props.unfollowUser} getUsers={this.props.getUsers} toggleIsFetching={this.props.toggleIsFetching} nextPageButton={this.nextPageButton} prevPageButton={this.prevPageButton} />
                </div>)
        } else {
            return (<div className="container">Соси хуй, бидло</div>)
        }
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        isFetching: state.usersPage.isFetching,
        pageNumber: state.usersPage.pageNumber,
        totalUsers: state.usersPage.totalUsers,
        isAuth: state.auth.isAuthorized
    }
}

export default connect(mapStateToProps, { changeAuthStatus, followUser, unfollowUser, getUsers, toggleIsFetching, nextPage, prevPage })(UsersContainer);