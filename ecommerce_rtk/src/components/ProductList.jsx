import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, disableItem } from "./CartSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const disableProducts = useSelector((state) => state.cart.disableProducts);
  // const [disabledProducts, setDisabledProducts] = useState(disableProduct);
  const products = [
    { id: 1, name: "Product A", price: 60 },
    { id: 2, name: "Product B", price: 75 },
    { id: 3, name: "Product C", price: 30 },
  ];
  const handleAddCart = (product) => {
    dispatch(addItemToCart(product));
    dispatch(disableItem(product.id));
  };

  return (
    <>
      <div className="container mx-auto flex flex-col">
        <h2 className="text-2xl text-center font-bold">Products</h2>
        <ul className="flex flex-col space-y-5">
          {products.map((product) => (
            <>
              <li
                key={product.id}
                className="flex flex-row justify-between px-4 items-center "
              >
                <span>
                  {product.name}-${product.price}
                </span>
                <button
                  className={`bg-darkBlue text-white px-4 py-2 rounded-md ${
                    disableProducts.includes(product.id)
                      ? "disabled:opacity-75"
                      : ""
                  }`}
                  disabled={disableProducts.includes(product.id)}
                  onClick={() => handleAddCart(product)}
                >
                  Add to Cart
                </button>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductList;
