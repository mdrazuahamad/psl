import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Players from "./pages/Players";
import Schedule from "./pages/Schedule";
import PlayerProfile from "./pages/PlayerProfile";

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col min-h-screen'>
        <Navbar />

        {/* Main Content */}
        <div className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/players' element={<Players />} />
            <Route path='/schedule' element={<Schedule />} />
            <Route path='/player/:id' element={<PlayerProfile />} />
          </Routes>
        </div>

        {/* Footer always at bottom */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
