import { compose } from 'redux';
import { sendMessageAction } from '../../redux/reducers/dialogsReducer';
import { withAuthCheck } from '../hoc/WithAuthCheck';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';
import { withSuspense } from '../hoc/WithSuspense';

const mapStateToProps = (state) => ({
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newMessageControlValue: state.dialogsPage.newMessageControlValue
});

const mapDispatchToProps = {
    sendMessage: sendMessageAction,
};

const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthCheck,
    withSuspense,
)(Dialogs);

export default DialogsContainer;