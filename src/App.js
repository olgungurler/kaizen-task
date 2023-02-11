import { Route, Routes as BaseRoutes } from "react-router-dom";
import DetailsPage from "./components/detailsPage";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import SliderCategory from "./components/slider-category/SliderCategory";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <>
      <BaseRoutes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Slider />
              <SliderCategory />
              <Navigation />
            </>
          }
        />
        <Route path="/:id" element={<DetailsPage />} />
      </BaseRoutes>
    </>
  );
}

export default App;
