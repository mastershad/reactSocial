import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>          
        <Route path='/Dialogs' 
          render={ () => <DialogsContainer /> }/>

        <Route path='/Profile'
          render={ () => <Profile /> }/>

        <Route path='/users'
          render={ () => <UsersContainer /> }/>
      </div>
    </div>
  )
}

export default App;
