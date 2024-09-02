import React, { useEffect, useState } from "react";
const UseEffectSample = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://api.npoint.io/d542b9ad99f501ab3dbf")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFoods(data);
      })
      .catch((error) => {
        console.error(`Error fetching users: ${error}`);
      });
  }, [foods]); // empty dependecy run only once
  return (
    <>
      <div>
        <ul>
          {foods.map((food) => (
            <>
              <li key={food.id}>
                {food.name}
                <img src={food.image_url} alt="" height={100} width={100} />
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UseEffectSample;
