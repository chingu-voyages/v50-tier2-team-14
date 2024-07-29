import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Map from './components/map.js'


function App() {
  return ( 
  <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/map" element={<Map />} />
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
