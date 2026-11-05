import PropTypes from "prop-types";
import css from "./Light.module.css";

import type { ColorLight } from "../../types/colorLight";

interface LightProps {
  color?: ColorLight;
  isActive: boolean;
  handleLightChange: (newLight: ColorLight) => void;
}

const Light = ({
  color = "red",
  isActive = false,
  handleLightChange,
}: LightProps) => {
  return (
    <div
      className={`${css.trafficLightUnit} ${isActive ? css.active : css.inactive}`}
      style={{ "--light-color": color }}
      onClick={() => {
        handleLightChange(color);
      }}
    ></div>
  );
};

Light.propTypes = {
  color: PropTypes.string,
  isActive: PropTypes.bool,
  setActiveLight: PropTypes.func,
  handleLightChange: PropTypes.func.isRequired,
};

export default Light;