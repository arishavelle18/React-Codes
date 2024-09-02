import { useEffect } from "react";
import UseFetch from "./UseFetch";
const FetchYogoData = () => {
  const [data] = UseFetch("https://api.npoint.io/4459a9a10e43812e1152");
  return (
    <>
      <div className="container mx-auto  flex flex-col items-center space-y-10 ">
        <h1 className="text-5xl text-center">Use Fetch Custom Hooks</h1>
        <ul className="flex flex-col space-y-10 outline outline-offset-2 outline-blue-500 rounded-sm px-5 py-5 text-center">
          {data &&
            data.map((data, index) => (
              <>
                <li
                  key={index}
                  className="outline outline-offset-2 outline-pink-500 px-2 py-2"
                >
                  <h3 className="text-xl font-bold">{data.name}</h3>
                  <p>
                    <strong>Importance:</strong>
                    {data.importance}
                  </p>
                  <p>
                    <strong>Benefits:</strong>
                    {data.benefits}
                  </p>
                  <p>
                    <strong>Time to eat:</strong>
                    {data.best_time_to_intake}
                  </p>
                </li>
              </>
            ))}
        </ul>
      </div>
    </>
  );
};

export default FetchYogoData;
