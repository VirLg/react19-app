import { produstsArr } from "./components/pages/products/data/data";
import Product from "./components/pages/products/Product";

function App() {
  console.log("produstsArr", produstsArr);
  return (
    <div className="App">
      <header className="App-header"></header>
      <Product products={produstsArr} />
    </div>
  );
}

export default App;
