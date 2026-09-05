import PropTypes from "prop-types";
import css from "./Light.module.css";

const Light = ({ color = "red" }) => {
  return (
    <div
      className={css.trafficLightUnit}
      style={{ "--light-color": color }}
    ></div>
  );
};

Light.propTypes = {
  color: PropTypes.string,
};

export default Light;