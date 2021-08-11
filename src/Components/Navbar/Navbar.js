import { Link } from 'react-router-dom';



function Navbar(){

  function hamClick(){
    document.getElementById("mySidenav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
  }  

    return (
    <div>
      <div className="navbar">
        <ul className="navbar-list">
          <li><i className="fas fa-bars" onClick={hamClick}></i></li>
          <li><Link className="link" to='/'>Home</Link></li>
          <li><Link className="link" to='/projects'>Projects</Link></li>
          <li><Link className="link" to='/blogs'>Blogs</Link></li>
        </ul>
      </div>
      <div id="mySidenav" className="sidenav">
        <div className="closebtn" onClick={closeNav}>&times;</div>
        <Link to='' onClick={closeNav}>Home</Link>
        <Link to='projects' onClick={closeNav}>Projects</Link>
        <Link to='blogs' onClick={closeNav}>Blogs</Link>
      </div>

    </div>
      );
  }

  export default Navbar;