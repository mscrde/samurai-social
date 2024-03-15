import React from 'react';
import { Post } from './Post/Post';
import PostsStyles from './Posts.module.scss';
import { Field, reduxForm } from 'redux-form';

const Posts = (props) => {
    const Posts = props.postsData.map(postData => (
        <Post key={postData.id} message={postData.message} id={postData.id} authorName={postData.authorName} />
    ))

    const NewPostFormComponent = reduxForm({
        form: 'newPostForm'
    })((props) => (
        <form onSubmit={props.handleSubmit}>
            <Field
                name="newPostText"
                component="textarea"
                cols="30"
                rows="10"
                placeholder="Текст нового поста"
            />
            <button>Запостить</button>
        </form>
    ))

    const createNewPost = (newPostFormValue) => {
        props.createPost(newPostFormValue.newPostText)
    }

    return (
        <div className={PostsStyles.posts}>
            <div>Посты</div>

            <div className={PostsStyles.newPost}>
                <NewPostFormComponent onSubmit={createNewPost}/>
            </div>

            {Posts}
        </div>
    )
}

export { Posts };