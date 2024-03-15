import { NavLink } from 'react-router-dom';
import NavBarStyles from './NavBar.module.scss';

const NavBar = (props) => {
    const navBarElementsTemplate = props.navBarData.sections.map((navBarElement) => {
        const url = navBarElement.name === 'Профиль' ? navBarElement.url + props.authData.id : navBarElement.url;
        return (
            <NavLink key={url} to={url}>{navBarElement.name}</NavLink>
        )
    });

    return (
        <div className={NavBarStyles.navbar}>
            {props.authData.isAuth && navBarElementsTemplate}
        </div>
    )
}

export { NavBar }; 