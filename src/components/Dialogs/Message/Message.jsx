import React from 'react';
import MessageStyles from './Message.module.scss';
import AnimeImage from '../../../images/anime.jpg';

const Message = (props) => (
    <div className={MessageStyles.messageContainer}>
        <div className={MessageStyles.userInfo}>
            <img src={AnimeImage} alt="anime" />
            <div className={MessageStyles.authorName}>
                { props.messageData.authorName }
            </div>
        </div>
        
        <div className={MessageStyles.messageContent}>
            { props.messageData.message }
        </div>
    </div>
)

export { Message };