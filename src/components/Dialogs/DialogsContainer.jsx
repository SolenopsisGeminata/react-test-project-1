import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const sDialogsContainer = (props) => {

    let state=props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let updateNewMessageText = (newMessageText) => {
        props.store.dispatch(updateNewMessageActionCreator(newMessageText))
    }

    return (
        <Dialogs addMessage={ addMessage }
                 updateNewMessageText={ updateNewMessageText }
                 dialogsPage={state.dialogsPage}
        />
    );
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageActionCreator(text));
        },
    }
}

const DialogsContainer =  connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer;