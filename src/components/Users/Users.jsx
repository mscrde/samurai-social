import React, { useState } from "react";
import { User } from "./User/User";
import UsersStyles from './Users.module.scss';


const Users = (props) => {
    const [currnetPageNumber, setCurrentPageNumber] = useState(1);

    const usersTemplate = props.users.map(user => 
        <div className={UsersStyles.userItem} key={user.id}>
            <User
                user={user}
                follow={props.follow}
                unfollow={props.unfollow}
                followingInProcessUserIds={props.followingInProcessUserIds}/>
        </div>
    )

    const onCurrentPageChange = (pageNumber) => {
        setCurrentPageNumber(pageNumber);
        props.onSelectCurrentPage(pageNumber);
    }

    const pagesTemplate = props.pages
        .filter(pageNumber => currnetPageNumber < 5 ? pageNumber <= 9 : pageNumber < currnetPageNumber + 5 && pageNumber > currnetPageNumber - 5)
        .map(pageNumber => 
            <div
                key={pageNumber}
                className={pageNumber === currnetPageNumber ? UsersStyles.activePage : undefined}
                onClick={() => onCurrentPageChange(pageNumber)}>
                {pageNumber}
            </div>
        )

    return (
        <div>
            <div className={UsersStyles.usersHeader}>
                <div>
                    Всего пользователей: { props.usersTotalCount }
                </div>

                <div className={UsersStyles.pageNumbers}>
                    { pagesTemplate }
                </div>
            </div>
            <div>
                { usersTemplate }
            </div>
        </div>
    )
}

export { Users };