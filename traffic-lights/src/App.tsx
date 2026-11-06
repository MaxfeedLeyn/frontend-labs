import { BrowserRouter, Routes, Route } from "react-router";

import Layout from "./templates/Layout";
import HomePage from "./pages/HomePage/HomePage";
import StatsPage from "./pages/StatsPage/StatsPage";
import TrafficLightPage from "./pages/TrafficLightPage/TrafficLightPage";
import NotFound from "./pages/NotFoundPage/NotFoundPage";

import { TrafficLightProvider } from "./components/TrafficLightProvider/TrafficLightProvider";

function App() {
  return (
    <BrowserRouter>
      <TrafficLightProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="stats" element={<StatsPage />} />
            <Route path="traffic-lights" element={<TrafficLightPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </TrafficLightProvider>
    </BrowserRouter>
  );
}

export default App;
