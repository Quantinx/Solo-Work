import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <h1>Site Title goes here</h1>
      <nav>
        <ul className="site-navbar">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
