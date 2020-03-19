import React from 'react';
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import FriendLink from "./FriendLink/FriendLink";

const Navbar = (props) => {
  
  let friendLinks = props.state.friends.map(f => <FriendLink state={f}/>);

  return (
      <nav className={classes.nav}>
          <div className={`${classes.item} ${classes.active}`}>
            <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
          </div>
          <div className={classes.navbarFriends}>
            <div className={classes.item}>
              <NavLink to="/friends" activeClassName={classes.active}>Friends</NavLink>
            </div>
            <div className={classes.navbarFriendLinks}>
              {friendLinks}
            </div>
          </div>
      </nav>
  );
}

export default Navbar;