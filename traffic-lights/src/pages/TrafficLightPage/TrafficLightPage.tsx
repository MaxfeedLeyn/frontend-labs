import css from "./TrafficLightPage.module.css";

import { useTrafficLightContext } from "../../components/TrafficLightProvider/TrafficLightProvider";
import TrafficLights from "../../components/TrafficLights/TrafficLights";

function TrafficLightPage() {
  const { orientation, setOrientation, handleLightChange } =
    useTrafficLightContext();

  return (
    <div className={css.trafficLightPage}>
      <h1>Traffic Light Page</h1>
      <div className={css.trafficLightsContainer}>
        <TrafficLights
          flexDirection={orientation}
          handleLightChange={handleLightChange}
        />
        <TrafficLights
          flexDirection={orientation}
          handleLightChange={handleLightChange}
        />
        <TrafficLights
          flexDirection={orientation}
          handleLightChange={handleLightChange}
        />
      </div>
      <div className={css.orientationButtons}>
        <button onClick={() => setOrientation("row")}>Row</button>
        <button onClick={() => setOrientation("column")}>Column</button>
      </div>
    </div>
  );
}

export default TrafficLightPage;
