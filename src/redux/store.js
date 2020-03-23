import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id:1, message:"Hi, how are you?", likesCount: 0},
                {id:2, message:"It's my first post", likesCount: 23},
                {id:3, message:"yo", likesCount: 12},
                {id:4, message:"yo", likesCount: 14},
                {id:5, message:"yo", likesCount: 15},
                {id:6, message:"yo", likesCount: 12}
            ],
            newPostText: '',
        },
        
        dialogsPage: {
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
        },
    
        sidebar: {
            friends: [
                {id: 2, name: "Andrew"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"}
            ]
        },
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log('this._state changed');
    },
    _addMessage() {
        let newMessage = {
            id: 7,
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    _updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

        /*if (action.type === ADD_POST) { // { type: 'ADD-POST' }
            this._addPost();
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) { // { type: 'ADD-POST', newText }
            this._updateNewPostText(action.newText);
        }
        else if (action.type === ADD_MESSAGE) {
            this._addMessage();
        }
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._updateNewMessageText(action.newMessageText);
        }*/
    }
}

export default store;