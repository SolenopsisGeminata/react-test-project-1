const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"}
    ],
    messages: [
        {id: 1, message: "hi"},
        {id: 2, message: "hello"},
        {id: 3, message: "yo"},
        {id: 4, message: "yo"},
        {id: 5, message: "yo"},
        {id: 6, message: "yo"}
    ],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {...state}
    const _addMessage = () => {
        let newMessage = {
            id: 7,
            message: stateCopy.newMessageText,
        }
        stateCopy.messages.push(newMessage);
        stateCopy.newMessageText = '';
    };
    const _updateNewMessageText = (newText) => {
        stateCopy.newMessageText = newText;
    };

    switch (action.type) {
        case ADD_MESSAGE:
            _addMessage();
            return stateCopy;
        case UPDATE_NEW_MESSAGE_TEXT:
            _updateNewMessageText(action.newMessageText);
            return stateCopy;
        default:
            return state;
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