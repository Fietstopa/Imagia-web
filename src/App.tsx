// src/App.tsx (příklad s React Router v6)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ReservationPage from "./pages/ReservationPage";
import Home from "./pages/Home";
import Gallery from "./pages/GalleryPage";
import Footer from "./components/Footer";
import Room1 from "./pages/Room1";
import Room2 from "./pages/Room2";
import Coupons from "./pages/Coupons";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/room1" element={<Room1></Room1>} />
        <Route path="/room2" element={<Room2></Room2>} />
        <Route path="/coupons" element={<Coupons></Coupons>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
