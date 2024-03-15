import { connect } from 'react-redux';
import { NavBar } from './NavBar';

const mapStateToProps = (state) => ({
    navBarData: state.navBar,
    authData: state.auth,
});

const mapDispatchToProps = (dispatch) => ({});

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export { NavBarContainer }; 