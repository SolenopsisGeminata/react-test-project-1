import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} /> )

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
        //props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let newMessageText = newMessageElement.current.value;
        props.updateNewMessageText(newMessageText);
        //props.dispatch(updateNewMessageActionCreator(newMessageText))
    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <div>
                    <textarea ref={newMessageElement} onChange={ onMessageChange } value={ props.dialogsPage.newMessageText }></textarea>
                </div>
                <div>
                    <button onClick={ addMessage }>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;