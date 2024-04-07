// reducer.js

const initialState = {
    users: [],
    filter: 'All'
  };
  
  const UsersReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_USER':
        const newUser = {
          id: state.users.length + 1,
          name: action.payload.name,
          email: action.payload.email,
          phone: action.payload.phone
        };
        return {
          ...state,
          users: [...state.users, newUser]
        };
      case 'TOGGLE_USER':
        return {
          ...state,
          filter: action.payload.status
        };
      case 'USER_ALL':
        return {
          ...state,
          users: action.payload.users,
          filter: 'All'
        };
      case 'DELETE_USER':
        return {
          ...state,
          users: state.users.filter(user => user.id !== action.payload.id)
        };
      case 'UPDATE_USER':
        const updatedUsers = state.users.map(user => {
          if (user.id === action.payload.id) {
            return {
              ...user,
              name: action.payload.name,
              email: action.payload.email,
              phone: action.payload.phone
            };
          }
          return user;
        });
        return {
          ...state,
          users: updatedUsers
        };
      default:
        return state;
    }
  };
  
  export { initialState, UsersReducer };
  