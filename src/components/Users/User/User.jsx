import React from 'react';
import UserStyles from './User.module.scss';
import { NavLink } from "react-router-dom";
import AnimeImage from '../../../images/anime.jpg';

const User = (props) => (
    <div className={UserStyles.user}>
        <div className={UserStyles.avatarAndButton}>
            <NavLink to={`/profile/${props.user.id}`}>
                <img src={props.user.photos?.small || props.user.photos?.large || AnimeImage} alt='anime' />
            </NavLink>
            <button
                disabled={props.followingInProcessUserIds.find(id => id === props.user.id)}
                onClick={() => props.user.followed ? props.unfollow(props.user.id) : props.follow(props.user.id)}
            >
                {!props.user.followed ? 'Подписаться': 'Отписаться'}
            </button>
        </div>
        <div className={UserStyles.userInfo}>
            <div className={UserStyles.mainInfo}>
                <div>
                    {props.user.name}
                </div>
                <div>
                    {props.user.location?.country || 'неизвестная страна'}, <br /> {props.user.location?.city || 'неизвестный город'}
                </div>
            </div>

            <div>
                {props.user.status}
            </div>
        </div>
    </div>
)

export { User };