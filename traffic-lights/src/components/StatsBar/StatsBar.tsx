import PropTypes from "prop-types";
import css from "./StatsBar.module.css";

import type { StatsManager } from "../../types/StatManager";

interface StatsBarProps extends StatsManager {
  direction: "row" | "column";
}

const StatsBar = ({ redCount, yellowCount, greenCount, totalCount, direction
}: StatsBarProps) => {
  return (
    <div className={css.statsBar}>
      <ul className={css.statsList}>
        <div style={{ flexDirection: direction }} className={css.mainStatsTitle}>
          <li className={`${css.statsItem} ${css.redItem}`}>Red: {redCount}</li>
          <li className={`${css.statsItem} ${css.yellowItem}`}>Yellow: {yellowCount}</li>
          <li className={`${css.statsItem} ${css.greenItem}`}>Green: {greenCount}</li>
        </div>
        <li className={css.statsItem}>Total: {totalCount}</li>
      </ul>
    </div>
  );
};

StatsBar.propTypes = {
  redCount: PropTypes.number.isRequired,
  yellowCount: PropTypes.number.isRequired,
  greenCount: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  direction: PropTypes.oneOf(["row", "column"]),
};

export default StatsBar;
