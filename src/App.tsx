import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ReservationPage from "./pages/ReservationPage";
import Home from "./pages/Home";
import Gallery from "./pages/GalleryPage";
import Footer from "./components/Footer";
import Room1 from "./pages/Room1";
import Room2 from "./pages/Room2";
import Coupons from "./pages/Coupons";
import { h1 } from "framer-motion/client";
import Rules from "./pages/Rules";
import Room3 from "./pages/Room3";
import WhyUs from "./pages/WhyUs";

// ScrollToTop komponenta
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/room1" element={<Room1 />} />
        <Route path="/room2" element={<Room2 />} />
        <Route path="/room3" element={<Room3 />} />
        <Route path="/whyus" element={<WhyUs />} />

        <Route path="/coupons" element={<Coupons />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
