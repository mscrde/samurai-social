import { Posts } from "./Posts/Posts";
import { UserInfo } from "./UserInfo/UserInfo";

const Profile = (props) => (
    <div>
        <UserInfo userInfo={props.userInfo} userStatus={props.userStatus} updateUserStatus={props.updateUserStatus}/>
        { Number(props.params?.userId) === props.authData.id && <Posts 
            postsData={props.postsData}
            newPostControlValue={props.newPostControlValue}
            updateNewPostControlValue={props.updateNewPostControlValue}
            createPost={props.createPost}
        /> }
    </div>
)

export { Profile };