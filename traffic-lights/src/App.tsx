import TrafficLights from "./components/TrafficLights/TrafficLights";
import css from "./App.module.css";

function App() {
  return (
    <>
      <section className={`${css.section} ${css.laba1}`}>
        <TrafficLights flexDirection="column" />
        <TrafficLights flexDirection="row" />
      </section>
    </>
  );
}

export default App;
