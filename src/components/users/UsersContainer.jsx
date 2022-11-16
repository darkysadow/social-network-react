import React from "react";
import { connect } from "react-redux";
import { followUser, getUsers, unfollowUser, toggleIsFetching, nextPage, prevPage } from "../../redux/users-reducer";
import { checkAuthMe } from "../../redux/auth-reducer";
import Users from "./Users";
import { withAuthRedirect } from "../hoc/AuthRedirect";
import { compose } from "redux";

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
                <Users users={this.props.users} pageNumber={this.props.pageNumber} isFetching={this.props.isFetching} totalUsers={this.props.totalUsers} follow={this.props.followUser} unfollow={this.props.unfollowUser} getUsers={this.props.getUsers} toggleIsFetching={this.props.toggleIsFetching} nextPageButton={this.nextPageButton} prevPageButton={this.prevPageButton} />
            </div>)
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
//let authRedirect = withAuthRedirect(UsersContainer);
//export default connect(mapStateToProps, { checkAuthMe, followUser, unfollowUser, getUsers, toggleIsFetching, nextPage, prevPage })(authRedirect);
export default compose(
    connect(mapStateToProps, { checkAuthMe, followUser, unfollowUser, getUsers, toggleIsFetching, nextPage, prevPage }),
    withAuthRedirect,
)(UsersContainer)