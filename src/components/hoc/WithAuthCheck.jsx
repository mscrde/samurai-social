import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const withAuthCheck = (Component) => {
    const wrapper = (props) => {
        if (!props.auth.isAuth) {
            return <Navigate  to="/login"/>;
        }

        return <Component {...props}/>
    }

    const mapStateToProps = (state) => ({
        auth: state.auth
    });
    const mapDispatchToProps = {}
    
    const checkComponent = connect(mapStateToProps, mapDispatchToProps)(wrapper)

    return checkComponent;
}

export { withAuthCheck }
