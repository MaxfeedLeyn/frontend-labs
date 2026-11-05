import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";

import type { ColorLight } from "../../types/colorLight";

import Light from "../Light/Light";
import css from "./TrafficLights.module.css";

interface TrafficLightsProps {
  flexDirection?: "row" | "column";
  handleLightChange: (newLight: ColorLight) => void;
}

const getLightFromIndex = (index: number): ColorLight => {
  if (index === 0) return "red";
  if (index === 1) return "yellow";
  if (index === 2) return "green";
  if (index === 3) return "yellow";
  throw new Error("Invalid index for light");
};

const TrafficLights = ({
  flexDirection = "column",
  handleLightChange,
}: TrafficLightsProps) => {
  const [activeLight, setActiveLight] = useState<ColorLight>("red");
  const [autoMode, setAutoMode] = useState<boolean>(true);

  const currentIndex = useRef<number>(0);

  const handleLightClick = (color: ColorLight) => {
    if (autoMode) return;

    setActiveLight(color);
    handleLightChange(color);

    const index = color === "red" ? 0 : color === "yellow" ? 1 : 2;

    currentIndex.current = index;
  };

  useEffect(() => {
    if (!autoMode) return;

    const interval = setInterval(() => { 
      const nextIndex = (currentIndex.current + 1) % 4;

      currentIndex.current = nextIndex;
      const nextLight = getLightFromIndex(nextIndex);

      setActiveLight(nextLight);
    }, 1000);

    return () => clearInterval(interval);
  }, [autoMode]);

  return (
    <>
      <div
        className={css.trafficLight}
        style={{ "--traffic-light-direction": flexDirection }}
      >
        <Light
          color="red"
          isActive={activeLight === "red"}
          handleLightChange={handleLightClick}
        />
        <Light
          color="yellow"
          isActive={activeLight === "yellow"}
          handleLightChange={handleLightClick}
        />
        <Light
          color="green"
          isActive={activeLight === "green"}
          handleLightChange={handleLightClick}
        />
      </div>
      <button
        className={css.autoModeButton}
        onClick={() => setAutoMode(!autoMode)}
      >
        {autoMode ? "to Manual Mode" : "to Auto Mode"}
      </button>
    </>
  );
};

TrafficLights.propTypes = {
  flexDirection: PropTypes.string,
  handleLightChange: PropTypes.func.isRequired,
};

export default TrafficLights;
