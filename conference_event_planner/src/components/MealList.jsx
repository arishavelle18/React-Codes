const MealList = (props) => {
  return (
    <>
      <div className="flex flex-row items-center space-x-10">
        <input
          type="checkbox"
          id={props.meal.name}
          name={props.meal.name}
          value={props.meal.name}
          onClick={props.handleMealSelection}
          checked={props.meal.selected}
        />
        <label htmlFor="breakfast">{props.meal.name}</label>
      </div>
    </>
  );
};

export default MealList;
