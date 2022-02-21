import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  
} from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import { logout } from './fetch-utils';
import { NavLink } from 'react-router-dom';
import AuthPage from './AuthPage';

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('supabase.auth.token'));

  async function handleLogout(){
    logout();
   
    setCurrentUser('');
  }



  return (
    <Router>
      <div className="App">
        <header>
          {
            currentUser &&
            <div>
              <button onClick={handleLogout}>Logout</button>
            </div>
          }
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {currentUser
                ? <Redirect to="/watchlist" />
                : <AuthPage setUser={setCurrentUser}/>}
              {
                currentUser &&
                <div>
                  <NavLink to="/search">Search Page</NavLink>
                  <NavLink to="/watchlist">Watchlist Page</NavLink>
                </div>
              }
            </Route>
          </Switch>
        </main>
    
      </div>
    </Router>
  );
}

export default App;
