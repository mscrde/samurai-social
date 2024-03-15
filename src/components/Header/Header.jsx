import React from "react";
import HeaderStyles from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = (props) => (
    <div className={HeaderStyles.header}>
        <div>
            Соцсеть пиздец
        </div>

        {
            props.authData.isAuth ? (
                <div>
                    {props.authData.login}
                    <button className={HeaderStyles.logoutButton} onClick={props.logout}>Logout</button>
                </div>
            ) : (
                <NavLink to={`/login`}>
                    Login
                </NavLink>
            )
        }
    </div>
)

export { Header };