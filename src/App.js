import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return ( 
  <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
