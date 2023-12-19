import './Navbar.css'
const NavBar = () => {
  return (
    <nav className="nav-container container">
      <div className="navbar-img">
        <img src="/images/logo.png" alt="" />
        </div>  

        <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
    </ul>
    </nav>
    
  )
}

export default NavBar