import React from 'react';
import s from './FriendLink.module.css';
import { NavLink } from 'react-router-dom';

const FriendLink = (props) => {

    return (
        <NavLink to={"/friends/" + props.state.id} className={s.friend} activeClassName={s.friendActive}>
            <div className={s.friendAvatar}>
                <img src="" alt="user-avatar"/>
            </div>
            <div className={s.friendName}>{props.state.name}</div>
        </NavLink>
)}

export default FriendLink;