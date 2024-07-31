import { NavLink } from "react-router-dom";
import "./style.css";
import Logo from "../../assets/images/logo.png";

export const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            <img src={Logo} className="brand" alt="logo" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cycles"
            className={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            Cycles
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
