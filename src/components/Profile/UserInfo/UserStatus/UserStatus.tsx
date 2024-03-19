import React, { useEffect, useState } from "react"
import UserStatusStyle from './UserStatus.module.scss';

type UserStatusPropsType = {
    status: string,
    updateUserStatus: (status: string) => void
}

const UserStatus: React.FC<UserStatusPropsType> = (props) => {
    const [isStatusEditing, setIsStatusEditing] = useState(false);
    const [statusControlValue, setStatusControlValue] = useState(props.status);

    useEffect( () => {
        setStatusControlValue(props.status);
    }, [props.status])

    const onStatusControlChange = (e: any) => {
        setStatusControlValue(e.currentTarget?.value)
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