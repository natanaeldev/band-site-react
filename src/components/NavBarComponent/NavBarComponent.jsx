import { NavLink } from "react-router-dom";
import BandsiteLogo from "../../assets/logos/Logo-bandsite.svg";

import "./navBarComponent.scss";
function navBarComponent() {
  let classNameActive = "header__nav-bar-link header__nav-bar-link--active";
  let classname = "header__nav-bar-link";

  return (
    <nav className="header__nav-bar">
      <div className="header__nav-bar-logo">
        <NavLink to="/home">
          <img src={BandsiteLogo} alt="band-site-logo" />
        </NavLink>
      </div>
      <ul className="header__nav-bar-options">
        <NavLink
          className={({ isActive }) => (isActive ? classNameActive : classname)}
          to="/home"
        >
          Biography
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? classNameActive : classname)}
          to="/showpage"
        >
          Show
        </NavLink>
      </ul>
    </nav>
  );
}

export default navBarComponent;
