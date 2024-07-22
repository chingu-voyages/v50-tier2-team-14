import Cart from "./components/Cart/Cart";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <p className='text-5xl flex justify-center font-extrabold text-orange-500 mt-10'>Hungry Rabbit</p>
      </header>
      {/* <Cart /> */}
      <Menu />
    </div>
  );
}

export default App;
