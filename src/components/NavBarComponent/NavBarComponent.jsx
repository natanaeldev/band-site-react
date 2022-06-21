import { NavLink } from "react-router-dom";
function navBarComponent() {
  return (
    <nav className="header__nav-bar">
      <div className="header__nav-bar-logo">
        <NavLink to="/home">
          <img src="./assets/logos/Logo-bandsite.svg" alt="band-site-logo" />
        </NavLink>
      </div>
      <ul className="header__nav-bar-options">
        <li className="header__nav-bar-list header__nav-bar-link--active">
          <NavLink className="header__nav-bar-link" to="/home">
            Biography
          </NavLink>
        </li>
        <li className="header__nav-bar-list">
          <NavLink className="header__nav-bar-link" to="/showpage">
            Show
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default navBarComponent;
