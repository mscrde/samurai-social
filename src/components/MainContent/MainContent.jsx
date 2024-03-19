import { Navigate, Route, Routes } from 'react-router-dom';
import MainContentStyles from './MainContent.module.scss';
import { NavBarContainer } from '../NavBar/NavBarContainer';
import { LoginContainer } from '../Login/LoginContainer';
import React from 'react';
import { Loader } from '../common/Loader/Loader';

const ProfileContainer = React.lazy(() => import('../Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('../Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('../Dialogs/DialogsContainer'));

const MainContent = (props) => (
    <div className={MainContentStyles.mainContent}>
        <NavBarContainer />
        <div className={MainContentStyles.content}>
            <React.Suspense fallback={<Loader />}>
                <Routes>
                    <Route
                        path='/'
                        Component={() => <Navigate to={'/profile'}/>}
                    />
                    <Route
                        path='/profile/:userId?'
                        Component={ProfileContainer}
                    />
                    <Route
                        path='/dialogs/:dialogId?'
                        Component={DialogsContainer}
                    />
                    <Route
                        path='/users'
                        Component={UsersContainer}
                    />
                    <Route
                        path='/login'
                        Component={LoginContainer}
                    />

                    <Route
                        path='*'
                        Component={() => (<div>404 NOT FOUND</div>)}
                    />
                </Routes>
            </React.Suspense>
        </div>
    </div>
)

export { MainContent };