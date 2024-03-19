import { connect } from "react-redux";
import { Header } from "./Header";
import React from "react";
import { logoutThunk } from "../../redux/reducers/authReducer";

class HeaderApiComponent extends React.Component {
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    authData: state.auth,
})

const mapDispatchToProps = {
    logout: logoutThunk,
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderApiComponent);

export { HeaderContainer }

