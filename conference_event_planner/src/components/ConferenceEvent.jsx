import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkIfLandingPage } from "./NavigationSlice";
import Venue from "./Venue";

const ConferenceEvent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.location.pathname !== "/") {
      dispatch(checkIfLandingPage(false));
    } else {
      dispatch(checkIfLandingPage(true));
    }
  }, [window.location.pathname]);
  return (
    <>
      <div className=" bg-white text-black">
        <nav className="container mx-auto ">
          <div className="flex flex-col  items-center justify-center py-5 px-2 space-y-5  md:space-y-0 md:justify-between md:flex-row">
            <h1 className="text-2xl font-bold">Conference Expense Planner</h1>
            <ul className="flex flex-col space-y-2 items-center justify-center md:space-x-10  md:flex-row md:space-y-0">
              <li>
                <a href="/ConferenceEvent" className="text-md font-medium">
                  Venue
                </a>
              </li>
              <li>
                <a href="" className="text-md font-medium">
                  Add-Ons
                </a>
              </li>
              <li>
                <a href="" className="text-md font-medium">
                  Meals
                </a>
              </li>
              <li>
                <button className="text-md font-medium rounded-full bg-brightRed px-5 py-2 text-center text-white hover:bg-brightRedLight md:block">
                  Show Details
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <section id="venue-room ">
        <Venue />
      </section>
    </>
  );
};

export default ConferenceEvent;
