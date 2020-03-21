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
    _callSubscriber() {
        console.log('this._state changed');
    },
    addMessage() {
        let newMessage = {
            id: 7,
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;