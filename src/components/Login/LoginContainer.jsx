import { connect } from "react-redux"
import { Login } from "./Login"
import { loginThunk } from "../../redux/reducers/authReducer"

const LoginApiComponent = (props) => (
    <Login {...props}/>
)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    currentUserId: state.auth.id,
})

const mapDispatchToProps = {
    login: loginThunk,
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginApiComponent);

export { LoginContainer }