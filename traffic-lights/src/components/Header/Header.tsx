import css from "./Header.module.css";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <ul className={css.trafficLightOrientationsList}>
          <li className={css.trafficLightOrientationsItem}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? css.activeLink : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li className={css.trafficLightOrientationsItem}>
            <NavLink
              to="/traffic-lights"
              className={({ isActive }) =>
                isActive ? css.activeLink : undefined
              }
            >
              Traffic Light
            </NavLink>
          </li>
          <li className={css.trafficLightOrientationsItem}>
            <NavLink
              to="/stats"
              className={({ isActive }) =>
                isActive ? css.activeLink : undefined
              }
            >
              Stats
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
