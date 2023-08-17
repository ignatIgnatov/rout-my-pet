import { Link } from "react-router-dom";

const Header = ({ isAuthenticated, user }) => {
  let gusestNavigation = (
    <div id="guest">
      <Link className="button" to="/login">
        Login
      </Link>{" "}
      <Link className="button" to="/register">
        Register
      </Link>
    </div>
  );

  let userNaviation = (
    <div id="user">
      <span>Welcome, { user }</span>{" "}
      <Link className="button" to="/my-pets">
        My Pets
      </Link>{" "}
      <Link className="button" to="/create">
        Add Pet
      </Link>{" "}
      <Link className="button" href="#">
        Logout
      </Link>
    </div>
  );

  return (
    <header id="site-header">
      <nav className="navbar">
        <section className="navbar-dashboard">
          <Link to="/dashboard">Dashboard</Link>

          {isAuthenticated ? userNaviation : gusestNavigation}
        </section>
      </nav>
    </header>
  );
};

export default Header;
