import React from "react";
import { connect } from "react-redux";
import { followUser, getUsers, unfollowUser, toggleIsFetching, nextPage, prevPage } from "../../redux/users-reducer";
import { checkAuthMe } from "../../redux/auth-reducer";
import Users from "./Users";
import { withAuthRedirect } from "../hoc/AuthRedirect";
import { compose } from "redux";
import { getIsAuth, getLoggedUserId } from "../../redux/auth-selectors";
import { getIsFetching, getPageNumber, getTotalUsers, getUsersList } from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
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
        return (
            <div className="container">
                <Users loggedUserId={this.props.loggedUserId} users={this.props.users} pageNumber={this.props.pageNumber} isFetching={this.props.isFetching} totalUsers={this.props.totalUsers} follow={this.props.followUser} unfollow={this.props.unfollowUser} getUsers={this.props.getUsers} toggleIsFetching={this.props.toggleIsFetching} nextPageButton={this.nextPageButton} prevPageButton={this.prevPageButton} />
            </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersList(state),
        isFetching: getIsFetching(state),
        pageNumber: getPageNumber(state),
        totalUsers: getTotalUsers(state),
        isAuth: getIsAuth(state),
        loggedUserId: getLoggedUserId(state)
    }
}
export default compose(
    connect(mapStateToProps, { checkAuthMe, followUser, unfollowUser, getUsers, toggleIsFetching, nextPage, prevPage }),
    withAuthRedirect,
)(UsersContainer)