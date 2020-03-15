import React from 'react';
import Post from "./Post/Post.jsx"
import s from "./MyPosts.module.css";

const MyPosts = () => {

  let posts = [
    {id:1, message:"Hi, how are you?", likesCount: 0},
    {id:1, message:"It's my first post", likesCount: 23},
    {id:1, message:"yo", likesCount: 12},
    {id:1, message:"yo", likesCount: 14},
    {id:1, message:"yo", likesCount: 15},
    {id:1, message:"yo", likesCount: 12}
];

let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} /> );

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  );
}

export default MyPosts;