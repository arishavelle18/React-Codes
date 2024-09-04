import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SuperCoin = () => {
  const [superCoins, setSuperCoins] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    if (totalAmount >= 100 && totalAmount < 200) setSuperCoins(10);
    else if (totalAmount >= 200 && totalAmount < 300) setSuperCoins(20);
    else if (totalAmount >= 300) setSuperCoins(30);
    else setSuperCoins(0);
    console.log(superCoins);
  }, [totalAmount]);

  return (
    <>
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold">Super Coin </h3>
        <p>You will earn {superCoins} super coins with this purchase</p>
      </div>
    </>
  );
};

export default SuperCoin;
