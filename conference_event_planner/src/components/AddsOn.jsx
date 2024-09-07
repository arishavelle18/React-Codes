import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity } from "./AddsOnSlice";

const AddsOn = () => {
  const dispatch = useDispatch();
  const addsOn = useSelector((state) => state.addsOn);
  const totalAmount = addsOn.reduce(
    (total, item) => total + item.quantity * item.cost,
    0
  );

  const incrementQuantityHandler = (index) => {
    dispatch(incrementQuantity(index));
  };
  const decrementQuantityHandler = (index) => {
    dispatch(decrementQuantity(index));
  };

  return (
    <>
      <div className="container mx-auto mt-20 bg-white text-black px-10 py-5 space-y-5">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">Adds-ons Selection</h1>
        </div>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-3 ">
          {addsOn.map((addsOnItem, index) => (
            <div
              key={index}
              className="flex flex-col space-y-2 text-center bg-blackColor text-white px-4 py-7 rounded-lg"
            >
              <img src={addsOnItem.img} alt="" />
              <p className="text-lg font-medium">{addsOnItem.name}</p>
              <p className="text-md font-normal">(Capacity:15)</p>
              <p className="text-md font-normal">${addsOnItem.cost}</p>
              <div className="flex flex-row items-center justify-center space-x-5 px-10">
                <button
                  className="px-3 py-2 w-1/3 bg-brightRed text-white font-bold"
                  onClick={() => decrementQuantityHandler(index)}
                >
                  -
                </button>
                <p className="w-1/3 text-center justify-self-center">
                  {addsOnItem.quantity}
                </p>
                <button
                  className="px-3 py-2 w-1/3 bg-brightRed text-white font-bold"
                  onClick={() => incrementQuantityHandler(index)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="container mx-auto flex flex-col items-center justify-center">
          <div className="flex flex-col px-5 py-3 bg-black text-white rounded-md">
            <p className="text-md font-bold">Total Cost: ${totalAmount}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddsOn;
