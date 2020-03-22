const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

    const _addMessage = () => {
        let newMessage = {
            id: 7,
            message: state.newMessageText,
        }
        state.messages.push(newMessage);
        state.newMessageText = '';
    };
    const _updateNewMessageText = (newText) => {
        state.newMessageText = newText;
    };

    switch (action.type) {
        case ADD_MESSAGE:
            _addMessage();
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            _updateNewMessageText(action.newMessageText);
            break;
        default:
            break;
    }
    
    return state;
}

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
  });

export const updateNewMessageActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, 
    newMessageText: text,
})

export default dialogsReducer;