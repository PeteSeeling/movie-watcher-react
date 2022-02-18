import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Navlink,
} from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import { logout } from './fetch-utils';

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('supabase.auth.token'));



  return (
    <div className="App">
    
    </div>
  );
}

export default App;
