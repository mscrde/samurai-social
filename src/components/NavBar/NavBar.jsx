import { NavLink } from 'react-router-dom';
import NavBarStyles from './NavBar.module.scss';

const NavBar = (props) => {
    const navBarElementsTemplate = props.navBarData.sections.map((navBarElement) => {
        return (
            <NavLink key={navBarElement.url} to={navBarElement.url}>{navBarElement.name}</NavLink>
        )
    });

    return (
        <div className={NavBarStyles.navbar}>
            {props.authData.isAuth && navBarElementsTemplate}
        </div>
    )
}

export { NavBar }; 