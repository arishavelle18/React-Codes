import { useDispatch, useSelector } from "react-redux";

const ShowDetails = () => {
  const dispatch = useDispatch();
  const venue = useSelector((state) => state.venue).filter(
    (venueItem) => venueItem.quantity > 0
  );
  const addsOn = useSelector((state) => state.addsOn).filter(
    (addsOnItem) => addsOnItem.quantity > 0
  );
  const meals = useSelector((state) => state.meal);
  const totalMeals = meals.totalNumber;
  const mealList = meals.mealList.filter((mealItem) => mealItem.selected);
  console.log(meals);
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                  <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Unit Cost
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Total Cost
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {venue.map((venuItem, index) => (
                      <>
                        <tr
                          className="border-b border-neutral-200 dark:border-white/10"
                          key={index}
                        >
                          <td className="whitespace-nowrap px-6 py-4">
                            {venuItem.name}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {venuItem.cost}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {venuItem.quantity}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {venuItem.quantity * venuItem.cost}
                          </td>
                        </tr>
                      </>
                    ))}

                    {addsOn.map((addsOnItem, index) => (
                      <>
                        <tr
                          className="border-b border-neutral-200 dark:border-white/10"
                          key={index}
                        >
                          <td className="whitespace-nowrap px-6 py-4">
                            {addsOnItem.name}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            ${addsOnItem.cost}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {addsOnItem.quantity}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            ${addsOnItem.quantity * addsOnItem.cost}
                          </td>
                        </tr>
                      </>
                    ))}
                    {mealList.map((mealItem, index) => (
                      <>
                        <tr
                          className="border-b border-neutral-200 dark:border-white/10"
                          key={index}
                        >
                          <td className="whitespace-nowrap px-6 py-4">
                            {mealItem.name}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            ${mealItem.cost}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {totalMeals}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            ${totalMeals * mealItem.cost}
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowDetails;
