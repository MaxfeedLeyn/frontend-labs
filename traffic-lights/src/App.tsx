import TrafficLights from "./components/TrafficLights/TrafficLights";
import css from "./App.module.css";

import StatsBar from "./components/StatsBar/StatsBar";
import Header from "./components/Header/Header";

import { useState } from "react";

import type { ColorLight } from "./types/colorLight";
import type { Orientation } from "./types/orientations";
import type { StatsManager } from "./types/StatManager";

function App() {
  const [orientation, setOrientation] = useState<Orientation>("column");

  const [StatsManager, setStatsManager] = useState<StatsManager>({
    redCount: 0,
    yellowCount: 0,
    greenCount: 0,
    totalCount: 0,
  });

  const handleLightChange = (newLight: ColorLight) => {
    setStatsManager((prevStats) => {
      const updatedStats = { ...prevStats };
      updatedStats.totalCount += 1;

      switch (newLight) {
        case "red":
          updatedStats.redCount += 1;
          break;
        case "yellow":
          updatedStats.yellowCount += 1;
          break;
        case "green":
          updatedStats.greenCount += 1;
          break;
      }

      return updatedStats;
    });
  };

  return (
    <>
      <Header onOrientationChange={setOrientation} />
      <section className={`${css.section} ${css.laba1}`}>
        <TrafficLights flexDirection={orientation} handleLightChange={handleLightChange} />
      </section>
      <StatsBar {...StatsManager} />
    </>
  );
}

export default App;
