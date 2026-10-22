import Props from "prop-types";
import css from "./Header.module.css";

import type { Orientation } from "../../types/orientations";

interface HeaderProps {
  onOrientationChange: (orientation: Orientation) => void;
}

const Header = ({ onOrientationChange }: HeaderProps) => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <ul className={css.trafficLightOrientationsList}>
          <li className={css.trafficLightOrientationsItem}>
            <button
              className={css.trafficLightOrientationButton}
              onClick={() => onOrientationChange("column")}
            >
              Vertical
            </button>
          </li>
          <li className={css.trafficLightOrientationsItem}>
            <button
              className={css.trafficLightOrientationButton}
              onClick={() => onOrientationChange("row")}
            >
              Horizontal
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  onOrientationChange: Props.func.isRequired,
};

export default Header;
