import React from 'react';
import UserInfoStyles from './UserInfo.module.scss';
import AnimeImage from '../../../images/anime.jpg';
import { UserStatus } from './UserStatus/UserStatus';

const UserInfo = (props) => (
    <div className={UserInfoStyles.userInfoContainer}>
        <img src={props.userInfo.photos?.large || props.userInfo.photos?.small || AnimeImage } alt='anime'/>
        <div className={UserInfoStyles.userInfo}>
            <div>{props.userInfo.fullName}</div>
            { props.userInfo.aboutMe && <div>{props.userInfo.aboutMe}</div> }
            <div>
                { props.userInfo.lookingForAJob ? 'Ищет' : 'Не ищет'} работку { props.userInfo.lookingForAJobDescription && `- ${props.userInfo.lookingForAJobDescription}` }
            </div>

            <UserStatus status={props.userStatus} updateUserStatus={props.updateUserStatus}/>
        </div>
    </div>
)

export { UserInfo };