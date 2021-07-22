import './Navbar.css';
import { Link } from 'react-router-dom';

const openNav = ()=>{
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



const Navbar = ()=>{

    return (
    <div>
      <div id="navbar">
        <ul id="nav">
          <li><i className="fas fa-bars" onClick={openNav}></i></li>
          <li><Link className="link" to='/'>Home</Link></li>
          <li><Link className="link" to='/projects'>Projects</Link></li>
          <li><Link className="link" to='/blogs'>Blogs</Link></li>
          {/* <h2 className="home-title">{text}</h2> */}
        </ul>
      </div>
      <div id="mySidenav" className="sidenav">
        <div className="closebtn" onClick={closeNav}>&times;</div>
        <Link to='projects' onClick={closeNav}>Projects</Link>
        <Link to='blogs' onClick={closeNav}>Blogs</Link>
      </div>

    </div>
      );
  }

  export default Navbar;