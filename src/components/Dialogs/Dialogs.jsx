import React from 'react';
import { DialogTitle } from './DialogTitle/DialogTitle';
import DialogsStyles from './Dialogs.module.scss';
import { Message } from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/Input/Input';
import { requiredValidator } from '../../utils/validators/validators';

const Dialogs = (props) => {
    const chatListTemplate = props.dialogsData.map(dialogData => (
        <DialogTitle key={dialogData.id} dialogInfo={dialogData}/>
    ));

    const messagesTempalte = props.messagesData.map((messageData) => (
        <Message key={messageData.id} messageData={messageData}/>
    ))

    const NewMessageFormComponent = reduxForm({
        form: 'newMessageForm'
    })(props => (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name="newMessageText"
                cols="30"
                rows="10"
                placeholder="Текст нового сообщения"
                validate={[requiredValidator]}
            />
            <button>Отправить сообщение</button>
        </form>
    ))

    const onSendMessageClick = (newMessageFormValue) => {
        props.sendMessage(newMessageFormValue.newMessageText)
    } 

    return (
        <div className={DialogsStyles.dialogsContainer}>
            <div className={DialogsStyles.chatList}>
                {chatListTemplate}
            </div>

            <div className={DialogsStyles.chat}>
                {messagesTempalte}

                <div className={DialogsStyles.newMessageControl}>
                    <NewMessageFormComponent onSubmit={onSendMessageClick}/>
                </div>
            </div>
        </div>
    )
}

export { Dialogs };