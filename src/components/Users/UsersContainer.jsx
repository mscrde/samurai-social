import { connect } from "react-redux"
import { Users } from "./Users";
import { followThunk, getUsersThunk, unfollowThunk } from "../../redux/reducers/usersReducer";
import React from "react";
import { Loader } from "../common/Loader/Loader";
import { withAuthCheck } from "../hoc/WithAuthCheck";
import { compose } from "redux";
import { getFilterableUsers } from "../../redux/selectors/users-selectors";
import { withSuspense } from "../hoc/WithSuspense";

class UsersApiContainer extends React.Component {
    getUsers(pageNumber=null) {
        const page = pageNumber || 1;
        this.props.getUsers(page, this.props.pageSize)
    }
    
    componentDidMount() {
        this.getUsers();
    }

    onSelectCurrentPage(pageNumber) {
        this.getUsers(pageNumber);
    }

    render() {
        return this.props.isUsersFetching ? (<Loader />) : (
            <Users
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                pages={this.props.pages}
                onSelectCurrentPage={this.onSelectCurrentPage.bind(this)}
                usersTotalCount={this.props.usersTotalCount}
                followingInProcessUserIds={this.props.followingInProcessUserIds}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    users: getFilterableUsers(state),
    usersTotalCount: state.usersPage.usersTotalCount,
    pageSize: state.usersPage.pageSize,
    pages: state.usersPage.pages,
    isUsersFetching: state.usersPage.isUsersFetching,
    followingInProcessUserIds: state.usersPage.followingInProcessUserIds,
});

const mapDispatchToProps = {
    getUsers: getUsersThunk,
    follow: followThunk,
    unfollow: unfollowThunk,
};

const UsersContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthCheck,
    withSuspense,
)(UsersApiContainer);

export default UsersContainer;