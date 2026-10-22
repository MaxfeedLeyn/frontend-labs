import PropTypes from "prop-types";
import { useState } from "react";

import type { ColorLight } from "../../types/colorLight";

import Light from "../Light/Light";
import css from "./TrafficLights.module.css";

interface TrafficLightsProps {
  flexDirection?: "row" | "column";
  handleLightChange: (newLight: ColorLight) => void;
}

const TrafficLights = ({
  flexDirection = "column",
  handleLightChange,
}: TrafficLightsProps) => {
  const [activeLight, setActiveLight] = useState<ColorLight>("red");

  return (
    <div
      className={css.trafficLight}
      style={{ "--traffic-light-direction": flexDirection }}
    >
      <Light
        color="red"
        isActive={activeLight === "red"}
        setActiveLight={setActiveLight}
        handleLightChange={handleLightChange}
      />
      <Light
        color="yellow"
        isActive={activeLight === "yellow"}
        setActiveLight={setActiveLight}
        handleLightChange={handleLightChange}
      />
      <Light
        color="green"
        isActive={activeLight === "green"}
        setActiveLight={setActiveLight}
        handleLightChange={handleLightChange}
      />
    </div>
  );
};

TrafficLights.propTypes = {
  flexDirection: PropTypes.string,
  handleLightChange: PropTypes.func.isRequired,
};

export default TrafficLights;
