import css from "./StatsPage.module.css";
import { useTrafficLightContext } from "../../components/TrafficLightProvider/TrafficLightProvider";

function StatsPage() {
  const { StatsManager } = useTrafficLightContext();

  return (
    <div className={css.statsPage}>
      <h1>Stats Page</h1>
      <ul className={css.infoList}>
        <li className={css.infoItem}>
          <div className={`${css.lightColor} ${css.red}`}></div>Red Lights:{" "}
          {StatsManager.redCount}
        </li>
        <li className={css.infoItem}>
          <div className={`${css.lightColor} ${css.yellow}`}></div>Yellow Lights:{" "}
          {StatsManager.yellowCount}
        </li>
        <li className={css.infoItem}>
          <div className={`${css.lightColor} ${css.green}`}></div>Green Lights:{" "}
          {StatsManager.greenCount}
        </li>
        <li className={css.infoItem}>
          Total Lights: {StatsManager.totalCount}
        </li>
      </ul>
    </div>
  );
}

export default StatsPage;
