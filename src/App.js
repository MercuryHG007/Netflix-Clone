import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';

import HomeScreen from './screens/HomeScreen.js';
import LoginScreen from './screens/LoginScreen';

function App() {

  const user = null

  return (
    <div className="app">
        <BrowserRouter>
          {!user? (
            <LoginScreen />
          ):(
            <Routes>
              <Route
                path='/'
                element={
                  <HomeScreen
                  />
                }
              />
            </Routes>
          )}
        </BrowserRouter>
    </div>
  );
}

export default App;
