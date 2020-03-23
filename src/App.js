import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.sidebar}/>
        <div className='app-wrapper-content'>
          <Route path="/profile" render={() => <Profile 
              store={props.store}
              /*addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}*/
          />} />
          <Route path="/dialogs" render={ () => <DialogsContainer 
             store={props.store}
              /*addMessage={props.addMessage}
              updateNewMessageText={props.updateNewMessageText}*/
              />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
  );


}

export default App;
