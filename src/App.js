import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>          
        <Route path='/Dialogs' 
          render={ () => <Dialogs store={props.store}/> }/>

        <Route path='/Profile'
          render={ () => <Profile 
              profilePage={props.state.profilePage} 
              dispatch={props.dispatch} /> }/>
      </div>
    </div>
  )
}

export default App;
