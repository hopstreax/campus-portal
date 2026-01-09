import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Campus Portal</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/lostfound">Lost & Found</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
