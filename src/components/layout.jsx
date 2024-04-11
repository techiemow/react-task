import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import AddBook from './addbook';
import AddAuthor from './addauthor';
import Books from './books';
import Author from './author';


const Layout = () => {
  const [activeContent, setActiveContent] = useState('books'); // Default to displaying Books

  const handleNavButtonClick = (content) => {
    setActiveContent(content);
  };

  // Render the active content based on button clicks
  const renderActiveContent = () => {
    switch (activeContent) {
      case 'books':
        return <Books />;
      case 'addBook':
        return <AddBook />;
      case 'addAuthor':
        return <AddAuthor />;
      case 'author':
        return <Author/>;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar onNavButtonClick={handleNavButtonClick} />
      <div className="container">
        {renderActiveContent()}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
