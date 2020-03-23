import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator}  from "../../../redux/profile-reducer";
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

const sMyPostsContainer = (props) => {

  let state = props.store.getState();

let addPost = () => {
  //props.addPost();
  props.store.dispatch(addPostActionCreator());
}

let onPostChange = (text) => {
  //props.updateNewPostText(text);
  props.store.dispatch(updateNewPostActionCreator(text));
}

  return (
    <MyPosts updateNewPostText={ onPostChange }
             addPost={ addPost }
             posts={state.profilePage.posts}
             newPostText={state.profilePage.newPostText}
    />
  );
}

let mapStateToProps = (state) => {
  return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
      addPost: () => {
          dispatch(addPostActionCreator());
      },
      updateNewPostText: (text) => {
          dispatch(updateNewPostActionCreator(text));
      },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;