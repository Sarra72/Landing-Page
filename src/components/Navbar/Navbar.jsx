import './Navbar.css'

export default function Navbar() {
  return (
    <>
    
    <div className="navbar container">
        <p className="logo">Iuscious</p>
        <div className="right">
        <ul className="nav-items">
            <li className="nav-item"><a href="#">Dumplings</a></li>
            <li className="nav-item"><a href="#">Recipes</a></li>
            <li className="nav-item"><a href="#">Food Menu</a></li>
            <li className="nav-item"><a href="#">Order Now</a></li>
        </ul>
        <button className="login-btn">Login</button>
        </div>
    </div>
    
      
    </>
  )
}
