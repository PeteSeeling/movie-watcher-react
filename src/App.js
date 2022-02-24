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
import MoviesList from './MovieList';
import Movie from './Movie';
import SearchPage from './SearchPage';
import WatchListPage from './WatchListPage';

function App() {
  console.log();
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
              <NavLink to="/movieslist">Search Page</NavLink>
              <NavLink to="/watchlist">Watchlist Page</NavLink>
              <button onClick={handleLogout}>Logout</button>
            </div>
          }
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {currentUser
                ? <Redirect to="/movieslist" />
                : <AuthPage setUser={setCurrentUser}/>}
           
            </Route>
            <Route exact path="/watchlist">
              {currentUser
                ? <WatchListPage />
                : <AuthPage setUser={setCurrentUser}/>}
           
            </Route>
            <Route exact path="/movieslist">
              {currentUser
                ? <SearchPage />
                : <AuthPage setUser={setCurrentUser}/>}
           
            </Route>

          </Switch>
        </main>
    
      </div>
    </Router>
  );
}

export default App;
