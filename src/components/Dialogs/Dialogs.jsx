import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogs =[
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"}
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} /> );


    let messages = [
        {id: 1, message: "hi"},
        {id: 2, message: "hello"},
        {id: 3, message: "yo"},
        {id: 4, message: "yo"},
        {id: 5, message: "yo"},
        {id: 6, message: "yo"}
    ];

    let messagesElements = messages.map(m => <Message message={m.message} /> )
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogs;