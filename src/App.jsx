import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

// Lazy loading сторінок
const Home = lazy(() => import("./pages/Home/Home"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));

function App() {
  return (
    <Router>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />{" "}
          {/* Перенаправлення на Home для невідомих маршрутів */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
