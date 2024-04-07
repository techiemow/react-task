import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../App';
import { UsersReducer } from '../reducer/reducer';

const AddUser = () => {
  const { dispatch } = useContext(UserContext);
  const [newUser, setNewUser] = useState({ name: '', email: '', phone: '' });

  const addUser = async () => {
    try {
      // Dispatch action to add user to state
      dispatch({ type: 'ADD_USER', payload: newUser });

      // Make POST request to API to add user
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
      console.log(response.data);
      alert('User added successfully');

      // Clear the form after successful addition
      setNewUser({ name: '', email: '', phone: '' });
    } catch (error) {
      console.error('Error adding user:', error);
      alert('An error occurred while adding user');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <div>
      <h2>Add User</h2>
      <form className="add-user">
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            value={newUser.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Phone"
            name="phone"
            value={newUser.phone}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={addUser}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;