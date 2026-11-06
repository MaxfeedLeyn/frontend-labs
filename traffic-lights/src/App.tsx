import { BrowserRouter, Routes, Route } from "react-router";

import Layout from "./templates/Layout";
import HomePage from "./pages/HomePage";
import StatsPage from "./pages/StatsPage";
import TrafficLightsPage from "./pages/TrafficLightsPage";
import NotFound from "./pages/NotFound";

import TrafficLightsProvider from "./components/TrafficLights/TrafficLightsProvider";

function App() {
  return (
    <BrowserRouter>
      <TrafficLightsProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="stats" element={<StatsPage />} />
            <Route path="traffic-lights" element={<TrafficLightsPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        {/* <Header onOrientationChange={setOrientation} />
        <section style={{ flexDirection: orientation === "row" ? "column" : "row" }} className={`${css.section} ${css.laba1}`}>
          <div className={css.trafficLightsContainer}>
            <TrafficLights flexDirection={orientation} handleLightChange={handleLightChange} />
          </div>
          <StatsBar {...StatsManager} direction={orientation} />
        </section> */}
      </TrafficLightsProvider>
    </BrowserRouter>
  );
}

export default App;
