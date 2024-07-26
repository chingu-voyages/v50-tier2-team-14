import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Map from './map.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
      <p className='text-5xl flex justify-center font-extrabold text-orange-500 mt-10'>Hungry Rabbit</p>
      <Routes>
      <Route path="/map" element={<Map />} />
      </Routes>
      </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
