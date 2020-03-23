const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id:1, message:"Hi, how are you?", likesCount: 0},
        {id:2, message:"It's my first post", likesCount: 23},
        {id:3, message:"yo", likesCount: 12},
        {id:4, message:"yo", likesCount: 14},
        {id:5, message:"yo", likesCount: 15},
        {id:6, message:"yo", likesCount: 12}
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.posts = [...state.posts];
    const _addPost = () => {
        let newPost = {
            id: 5,
            message: stateCopy.newPostText,
            likesCount: 0,
        }
        stateCopy.posts.push(newPost);
        stateCopy.newPostText = '';
    };
    
    const _updateNewPostText = (newText) => {
        stateCopy.newPostText = newText;
    };

    switch (action.type) {
        case ADD_POST:  // { type: 'ADD-POST' }
            _addPost();
            return stateCopy;
        case UPDATE_NEW_POST_TEXT: // { type: 'ADD-POST', newText }
            _updateNewPostText(action.newText);
            return stateCopy;
        default:
            return state;
    }

    
}

export const addPostActionCreator = () => ({
    type: ADD_POST
  });

export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, 
    newText: text,
});

export default profileReducer;