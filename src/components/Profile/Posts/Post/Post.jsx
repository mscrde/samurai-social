import PostStyles from './Post.module.scss';
import AnimeImage from '../../../../images/anime.jpg';
import React from 'react';

const Post = (props) => (
    <div className={PostStyles.post}>
        <div className={PostStyles.authorInfo}>
            <img src={AnimeImage} alt="anime" />
            <div>{ props.authorName }</div>
        </div>
        <div className={PostStyles.message}>{ props.message }</div>
    </div>
    
)

export { Post }