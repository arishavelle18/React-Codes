import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity } from "./AddsOnSlice";
import MealList from "./MealList";
import { setTotalNumber, toggleMealSelection } from "./MealSlice";

const Meals = () => {
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.meal);

  const totalAmount =
    meals.mealList
      .filter((meal) => meal.selected)
      .reduce((total, item) => total + item.cost, 0) || 0;

  const handleMealSelection = (event, index) => {
    const { value, checked } = event.target;
    console.log(checked);
    if (checked) {
      //recorded isSelected
      dispatch(toggleMealSelection(index));
    } else {
      //recorded isNotSelected
      dispatch(toggleMealSelection(index));
    }
  };

  const handleNumberOfPeople = (event) => {
    const { value } = event.target;
    dispatch(setTotalNumber(value));
  };

  return (
    <>
      <div className="container mx-auto mt-5 bg-white text-black px-10 py-5 space-y-5">
        <div className="flex flex-col items-center space-y-20">
          <h1 className="text-4xl font-bold">Meals Selection</h1>
          <div className="flex flex-row items-center space-x-5 px-10">
            <label htmlFor="NumOfPeople" className="text-sm">
              Number of People:
            </label>
            <input
              type="number"
              id="numberOfPeople"
              name="numberOfPeople"
              className="w-100"
              value={meals.totalNumber}
              onChange={handleNumberOfPeople}
              min="1"
            />
          </div>
          <div className="grid gap-20 grid-cols-2 md:grid-cols-2 ">
            {meals.mealList.map((meal, index) => (
              <MealList
                meal={meal}
                key={index}
                handleMealSelection={() => handleMealSelection(event, index)}
              />
            ))}
          </div>
        </div>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-3 "></div>
        <div className="container mx-auto flex flex-col items-center justify-center">
          <div className="flex flex-col px-5 py-3 bg-black text-white rounded-md">
            <p className="text-md font-bold">
              Total Cost: ${totalAmount * meals.totalNumber}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meals;
