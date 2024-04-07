import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../App';
import { UsersReducer } from '../reducer/reducer';

const UserList = () => {
  const { state, dispatch } = useContext(UserContext);
  const [editedUser, setEditedUser] = useState(null);

  const deleteUser = (id) => {
    // Dispatch action to delete user
    dispatch({ type: 'DELETE_USER', payload: { id } });


    // axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    //   .then(response => {
    //     console.log(response);
    //     alert('User deleted successfully');
    //   })
    //   .catch(error => {
    //     console.error('Error deleting user:', error);
    //     alert('An error occurred while deleting user');
    //   });
  };

  const editUser = (user) => {
    setEditedUser(user);
  };

  const saveUser = async () => {
    try {
      // Dispatch action to update user
      dispatch({
        type: 'UPDATE_USER',
        payload: {
          id: editedUser.id,
          name: editedUser.name,
          email: editedUser.email,
          phone: editedUser.phone
        }
      });

      // Make PUT request to API to update user
      const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${editedUser.id}`, editedUser);
      console.log(response.data);
      alert('User updated successfully');

      // Reset editedUser state
      setEditedUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
      alert('An error occurred while updating user');
    }
  };

  const handleInputChange = (e, field) => {
    const { value } = e.target;
    setEditedUser(prevUser => ({
      ...prevUser,
      [field]: value
    }));
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {state.users.map(user => (
          <li key={user.id}>
            {editedUser && editedUser.id === user.id ? (
              <>
                <input
                  type="text"
                  className="form-control"
                  value={editedUser.name}
                  onChange={(e) => handleInputChange(e, 'name')}
                />&nbsp;&nbsp;
                <input
                  type="text"
                  className="form-control"
                  value={editedUser.email}
                  onChange={(e) => handleInputChange(e, 'email')}
                />&nbsp;&nbsp;
                <input
                  type="text"
                  className="form-control"
                  value={editedUser.phone}
                  onChange={(e) => handleInputChange(e, 'phone')}
                />
                <br />
                <button style={{background:"black", color:"whitesmoke",borderRadius:"10px"}}onClick={saveUser}>Update</button>
              </>
            ) : (
              <>
                <strong>Name:</strong> {user.name}
                <br />
                <strong>Email:</strong> {user.email}
                <br />
                <strong>Phone:</strong> {user.phone}
                <br />
                <button style={{background:"yellow",borderRadius:"10px"}} onClick={() => editUser(user)}>Edit</button> &nbsp;&nbsp;
                <button style={{background:"red",color:"whitesmoke",borderRadius:"10px"}} onClick={() => deleteUser(user.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
