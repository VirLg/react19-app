import Counter from "./components/pages/counter/Counter";
import ProductList from "./components/pages/products/ProductList";
import Test from "./components/pages/test/Test";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <ProductList />
      <Counter />
      <Test />
    </div>
  );
}

export default App;
