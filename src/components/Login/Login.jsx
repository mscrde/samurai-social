import React from "react";
import { Field, reduxForm } from "redux-form";
import { requiredValidator } from "../../utils/validators/validators";
import { Input } from "../common/Input/Input";
import { Navigate } from "react-router-dom";
import LoginStyles from './Login.module.scss';

const LoginForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <div>
            <div>Логин</div>
            <Field component={Input} name="username" placeholder="Логин" validate={[requiredValidator]}/>
        </div>

        <div>
            <div>Пароль</div>
            <Field component={Input} name="password" placeholder="Пароль" validate={[requiredValidator]}/>
        </div>

        {
            props.error &&
            <div className={LoginStyles.formError}>
                {props.error}
            </div>
        }

        <div>
            <button>
                Войти
            </button>
        </div>
    </form>
)

const Login = (props) => {
    const onSubmit = (loginFormValue) => {
        props.login(loginFormValue.username, loginFormValue.password);
    }

    const LoginReduxForm = reduxForm({
        form: 'login',
        initialValues: {username: 'free@samuraijs.com', password: 'free'}
    })(LoginForm);

    return (
        !props.isAuth ? <LoginReduxForm onSubmit={onSubmit}/> : <Navigate to={`/profile/${props.currentUserId}`} />
    )
}

export { Login }