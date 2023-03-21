import React, { useEffect } from 'react';
import { 
  useDispatch, 
  useSelector 
} from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { 
  login, 
  logout, 
  selectUser 
} from './features/userSlice';
import { auth } from './firebase';

import HomeScreen from './screens/HomeScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';

import './App.css';

function App() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        // LoggedIN
        dispatch(login(
          {
            uid: userAuth.uid,
            email: userAuth.email 
          }
        ))
      }
      else{
        // Logged Out
        dispatch(logout())
      }
    })
    return unsubscribe;
  },[dispatch])

  return (
    <div className="app">
        <BrowserRouter>
          {!user? (
            <LoginScreen />
          ):(
            <Routes>
              <Route
                path='/profile'
                element={
                  <ProfileScreen />
                }
              />
              <Route
                path='/'
                element={
                  <HomeScreen/>
                }
              />
            </Routes>
          )}
        </BrowserRouter>
    </div>
  );
}

export default App;
