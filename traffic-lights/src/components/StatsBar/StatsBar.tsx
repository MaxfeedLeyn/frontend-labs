import PropTypes from "prop-types";
import css from "./StatsBar.module.css";

import type { StatsManager } from "../../types/StatManager";

const StatsBar = ({
  redCount,
  yellowCount,
  greenCount,
  totalCount,
}: StatsManager) => {
  return (
    <div className={css.statsBar}>
      <ul>
        <li>Red: {redCount}</li>
        <li>Yellow: {yellowCount}</li>
        <li>Green: {greenCount}</li>
        <li>Total: {totalCount}</li>
      </ul>
    </div>
  );
};

StatsBar.propTypes = {
  redCount: PropTypes.number.isRequired,
  yellowCount: PropTypes.number.isRequired,
  greenCount: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  currentLight: PropTypes.oneOf(["red", "yellow", "green"]).isRequired,
};

export default StatsBar;