import { Provider, connect } from 'react-redux';
import AppStyles from './App.module.css';
import { Footer } from './components/Footer/Footer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { MainContent } from './components/MainContent/MainContent';
import React from 'react';
import { authThunk, successInitializedAction } from './redux/reducers/authReducer.ts';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from './components/common/Loader/Loader';
import { store } from './redux/redux-store';

class App extends React.Component {
  componentDidMount() {
    this.props.setAuth().then(r => this.props.setSuccessInitialized());
  }

  render() {
    return this.props.auth.initialized ? (
      <div className={AppStyles.App}>
        <BrowserRouter>
          <HeaderContainer />
    
          <div className={AppStyles.MainContent}>
            <MainContent/>
          </div>
          
          <Footer />
        </BrowserRouter>
      </div>
    ) : <Loader />;
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = {
  setAuth: authThunk,
  setSuccessInitialized: successInitializedAction
}

const AppContainerComponent = connect(mapStateToProps, mapDispatchToProps)(App)

const AppMainComponent = (props) => (
  <Provider store={store}>
    <AppContainerComponent />
  </Provider>
)

export default AppMainComponent;
