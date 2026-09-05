import PropTypes from "prop-types";

import Light from "../Light/Light";
import css from "./TrafficLights.module.css";

const TrafficLights = ({ flexDirection = "column" }) => {
  return (
    <div className={css.trafficLight}>
      <Light color="red" />
      <Light color="yellow" />
      <Light color="green" />
    </div>
  );
};

TrafficLights.propTypes = {
    flexDirection: PropTypes.string,
}


export default TrafficLights;