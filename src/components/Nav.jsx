
import { Link } from 'react-router-dom';
import "./Nav.css"

const Nav = ({ onCategoryClick }) => {
  return (
    <div className="container fixed-top">
      <nav className="navigation">
        <ul className="courses">
          <li><Link to="/" className='mx-4'>All</Link></li>
          <li><Link to="/full-stack" className='mx-4' onClick={() => onCategoryClick('Full Stack Development')}>Full Stack Development</Link></li>
          <li><Link to="/data-science" className='mx-4' onClick={() => onCategoryClick('Data Science')}>Data Science</Link></li>
          <li><Link to="/cyber-security" className='mx-4' onClick={() => onCategoryClick('CyberSecurity')}>Cyber Security</Link></li>
          <li><Link to="/career" className='mx-4' onClick={() => onCategoryClick('Career')}>Career</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
