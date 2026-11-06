import css from "./StatsPage.module.css";
import { useTrafficLightContext } from "../../components/TrafficLightProvider/TrafficLightProvider";

function StatsPage() {
  const { StatsManager } = useTrafficLightContext();

  return (
    <div className={css.statsPage}>
      <h1>Stats Page</h1>
      <p>Red Lights: {StatsManager.redCount}</p>
      <p>Yellow Lights: {StatsManager.yellowCount}</p>
      <p>Green Lights: {StatsManager.greenCount}</p>
      <p>Total Lights: {StatsManager.totalCount}</p>
    </div>
  );
}

export default StatsPage;
