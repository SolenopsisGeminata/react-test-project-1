let rerenderEntireTree = () => {
    console.log('state changed');
}

let state = {
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
}

export const addMessage = () => {

    let newMessage = {
        id: 7,
        message: state.dialogsPage.newMessageText,
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;