import React, { useEffect, useState } from "react"
import UserStatusStyle from './UserStatus.module.scss';

const UserStatus = (props) => {
    const [isStatusEditing, setIsStatusEditing] = useState(false);
    const [statusControlValue, setStatusControlValue] = useState(props.status);

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.statusControlValue !== this.props.statusControlValue) {
    //         this.setState({ statusControlValue: this.props.statusControlValue});
    //     }
    // }

    useEffect( () => {
        setStatusControlValue(props.status);
    }, [props.status])

    const onStatusControlChange = (e) => {
        setStatusControlValue(e.currentTarget.value)
    }

    const onStatusControlBlur = () => {
        props.updateUserStatus(statusControlValue);
        setIsStatusEditing(false);
    }

    return (
        <div>
            {
                isStatusEditing ? 
                    <input autoFocus={true} onChange={onStatusControlChange} onBlur={onStatusControlBlur} value={statusControlValue}/> :
                    <span className={UserStatusStyle.userStatus} onDoubleClick={() => setIsStatusEditing(true)}>{props.status}</span>
            }
        </div>
    )
}

export { UserStatus }