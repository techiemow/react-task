import React, { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import { UsersReducer, initialState } from './reducer/reducer';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import UserCount from "./components/Usercount"
import './App.css'; // Import CSS for styling

export const UserContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(UsersReducer, initialState);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch({ type: 'USER_ALL', payload: { users: response.data } });
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
    <div className="app-container">
      <h1>User Management App</h1>
      <div className="content-container">
        <UserList />
        <div className="sidebar">
          <UserCount />
          <AddUser />
        </div>
      </div>
    </div>
    </UserContext.Provider>
  );
};

export default App;
