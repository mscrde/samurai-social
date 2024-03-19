import { connect } from "react-redux";
import { addNewPostAction, getUserStatusThunk, getUserThunk, updateUserStatusThunk } from "../../redux/reducers/profileReducer";
import { Profile } from "./Profile";
import React from "react";
import { Loader } from "../common/Loader/Loader";
import { useParams } from "react-router-dom";
import { withAuthCheck } from "../hoc/WithAuthCheck";
import { compose } from "redux";
import { withSuspense } from "../hoc/WithSuspense";

class ProfileApiComponent extends React.Component {

    componentDidMount() {
        this.loadUserData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.params.userId !== this.props.params.userId) {
            this.loadUserData();
        }
    }

    loadUserData() {
        const userId = this.props.params.userId || this.props.authData.id;
        
        this.props.getUser(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            this.props.isUserInfoFetching ? <Loader /> : <Profile {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.profilePage.userInfo,
    userStatus: state.profilePage.userStatus,
    postsData: state.profilePage.postsData,
    newPostControlValue: state.profilePage.newPostControlValue,
    isUserInfoFetching: state.profilePage.isUserInfoFetching,
    authData: state.auth,
});

const mapDispatchToProps ={
    createPost: addNewPostAction,
    getUser: getUserThunk,
    getUserStatus: getUserStatusThunk,
    updateUserStatus: updateUserStatusThunk,
};

const ProfileWithRouteDataComponent = (props) => (<ProfileApiComponent {...props} params={useParams()}/>)

const ProfileContainer =  compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthCheck,
    withSuspense,
)(ProfileWithRouteDataComponent)

export default ProfileContainer;