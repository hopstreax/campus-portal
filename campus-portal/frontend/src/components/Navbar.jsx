import { Link } from "react-router-dom";

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Campus Portal
        </Link>

        <div className="ms-auto d-flex align-items-center gap-3">
          <Link className="nav-link text-white" to="/">Home</Link>
          <Link className="nav-link text-white" to="/resources">Resources</Link>
          <Link className="nav-link text-white" to="/lostfound">Lost & Found</Link>
          <Link className="nav-link text-white" to="/about">About</Link>

          <button
            className="btn btn-outline-light btn-sm"
            onClick={toggleTheme}
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
