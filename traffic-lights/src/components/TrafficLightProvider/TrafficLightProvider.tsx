import { createContext, useContext, useState } from "react";

import type { StatsManager } from "../../types/StatManager";
import type { Orientation } from "../../types/orientations";
import type { ColorLight } from "../../types/colorLight";

interface TrafficLightContextType {
  orientation: Orientation;
  setOrientation: (orientation: Orientation) => void;
  StatsManager: StatsManager;
  handleLightChange: (newLight: ColorLight) => void;
}

const TrafficLightContext = createContext<TrafficLightContextType | undefined>(
  undefined,
);

export const useTrafficLightContext = () => {
  const context = useContext(TrafficLightContext);
  if (!context) {
    throw new Error(
      "useTrafficLightContext must be used within a TrafficLightProvider",
    );
  }
  return context;
};

export function TrafficLightProvider({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <TrafficLightContext.Provider
      value={{ orientation, setOrientation, StatsManager, handleLightChange }}
    >
      {children}
    </TrafficLightContext.Provider>
  );
}
