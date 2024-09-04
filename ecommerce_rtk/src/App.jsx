import { useState } from "react";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import SuperCoin from "./components/SuperCoin";
function App() {
  return (
    <>
      <div className="flex flex-col space-y-10 mb-2">
        <div className="flex flex-col bg-brownColor  text-white items-center py-4">
          <h1 className="text-4xl font-bold text-center">
            E-Commerce Application
          </h1>
        </div>
        <div className="flex flex-col">
          <ProductList />
        </div>
        <div className="flex flex-col">
          <ShoppingCart />
        </div>
        <div className="flex flex-col">
          <SuperCoin />
        </div>
      </div>
    </>
  );
}

export default App;
