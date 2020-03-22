const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    const _addPost = () => {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0,
        }
        state.posts.push(newPost);
        state.newPostText = '';
    };
    
    const _updateNewPostText = (newText) => {
        state.newPostText = newText;
    };

    switch (action.type) {
        case ADD_POST:  // { type: 'ADD-POST' }
            _addPost();
            break;
        case UPDATE_NEW_POST_TEXT: // { type: 'ADD-POST', newText }
            _updateNewPostText(action.newText);
            break;
        default:
            break;
    }

    return state;
}

export const addPostActionCreator = () => ({
    type: ADD_POST
  });

export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, 
    newText: text,
});

export default profileReducer;