import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseItemQuantity,
  enableItems,
  increaseItemQuantity,
  removeItemFromCart,
} from "./CartSlice";
const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseItemQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseItemQuantity(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(enableItems());
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItemFromCart(itemId));
    dispatch(enableItems(itemId));
  };
  return (
    <>
      <div className="container mx-auto flex flex-col space-y-4 px-5 ">
        <h2 className="text-2xl text-center font-bold">Shopping Cart</h2>
        <div className="container mx-auto flex flex-col items-start space-y-10 px-3">
          <ul className="container mx-auto flex flex-col space-y-3">
            {cart &&
              cart.map((cartItem) => (
                <>
                  <li
                    key={cartItem.id}
                    className="flex flex-row items-center justify-between space-x-10 px-3 py-2"
                  >
                    <span>
                      {cartItem.name} - ${cartItem.price}
                    </span>
                    <div className="flex flex-row space-x-6 items-center">
                      <button
                        className="bg-greenColor text-white px-2 py-1 rounded-md"
                        onClick={() => handleIncreaseQuantity(cartItem.id)}
                      >
                        +
                      </button>
                      <span>{cartItem.quantity}</span>
                      <button
                        className="bg-greenColor text-white px-2 py-1  rounded-md"
                        onClick={() => handleDecreaseQuantity(cartItem.id)}
                      >
                        -
                      </button>
                      <button
                        className="bg-greenColor px-4 py-2 text-white rounded-md"
                        onClick={() => handleRemoveItem(cartItem.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                </>
              ))}
          </ul>
          <div className="container mx-auto flex flex-col  px-3">
            <p>{totalAmount ? `Total: $${totalAmount}` : ""}</p>
          </div>

          <button
            className="text-left bg-greenColor px-4 py-2 text-white font-bold rounded-m "
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
