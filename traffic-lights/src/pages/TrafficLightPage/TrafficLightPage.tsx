import css from "./TrafficLightPage.module.css";

import { useTrafficLightContext } from "../../components/TrafficLightProvider/TrafficLightProvider";
import TrafficLights from "../../components/TrafficLights/TrafficLights";

function TrafficLightPage() {
  const { orientation, setOrientation, handleLightChange } =
    useTrafficLightContext();

  return (
    <div className={css.trafficLightPage}>
      <h1>Traffic Light Page</h1>
      <section className={css.hero}>
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
          <button
            className={css.orientationButton}
            onClick={() => setOrientation("row")}
          >
            Horizontal
          </button>
          <button
            className={css.orientationButton}
            onClick={() => setOrientation("column")}
          >
            Vertical
          </button>
        </div>
      </section>
    </div>
  );
}

export default TrafficLightPage;
