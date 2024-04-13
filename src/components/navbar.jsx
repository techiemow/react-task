import React from 'react';
import "./navbar.css"

const Navbar = ({ onNavButtonClick }) => {
  return (
    <div className='navigation'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h1 className="navbar-brand" href="#">Whispering Leaves Library</h1>
          <div className='navbar-nav ml-auto'>
            <button className='btn btn-secondary mx-3' onClick={() => onNavButtonClick('books')}>Books</button>
            <button className="btn btn-info mx-3" onClick={() => onNavButtonClick('addBook')}>Add Book</button>
            <button className="btn btn-info mx-3" onClick={() => onNavButtonClick('addAuthor')}>Add Author</button>
            <button className='btn btn-secondary mx-3' onClick={() => onNavButtonClick('author')}>Author Records</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
