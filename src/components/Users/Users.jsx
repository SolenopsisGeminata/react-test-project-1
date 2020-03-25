import React from 'react';
import s from "./Users.module.css";

let Users = (props) => {
    return (
    <div className={s.users + " " + s.usersPageUsers}>
        {props.users.map( u => 
            <div key={u.id} className={s.user}>
                <div className={s.userColumn}>
                    <div className={s.userAvatar}>
                        <img src={u.avatar} alt="user-avatar" className={s.userAvatarImage}/>
                    </div>
                    <div className={s.userButtonFollowWrapper}>
                        { u.isFollowed 
                        ? <button onClick={ () => { props.unfollow(u.id) } }>Unfollow</button> 
                        : <button onClick={ () => { props.follow(u.id) } }>Follow</button> }
                    </div>
                </div>
                <div className={s.userInfo}>
                    <div className={s.userInfoRow}>
                        <div className={s.userName}>
                            <span>{u.firstName}</span>
                            &nbsp;
                            <span>{u.lastName}</span>
                        </div>
                        <div className={s.userAddress}>
                            <span>{u.country}</span>{","}<br />
                            <span>{u.city}</span>
                        </div>
                    </div>
                    <div className={s.userStatus}>
                        {u.status}
                    </div>
                </div>
            </div>)}
    </div>
)}

export default Users;