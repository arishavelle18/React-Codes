import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { checkIfLandingPage } from "./NavigationSlice";
import Venue from "./Venue";
import AddsOn from "./AddsOn";
import Meals from "./Meals";
import ShowDetails from "./ShowDetails";

const ConferenceEvent = () => {
  const [navbar, setNavbar] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.pathname !== "/") {
      dispatch(checkIfLandingPage(false));
    } else {
      dispatch(checkIfLandingPage(true));
    }
  }, [window.location.pathname]);

  const navigationNavbarHandler = (nav) => {
    setNavbar(nav);
  };

  return (
    <>
      <div className=" bg-white text-black">
        <nav className="container mx-auto ">
          <div className="flex flex-col  items-center justify-center py-5 px-2 space-y-5  md:space-y-0 md:justify-between md:flex-row">
            <h1 className="text-2xl font-bold">Conference Expense Planner</h1>
            <ul className="flex flex-col space-y-2 items-center justify-center md:space-x-10  md:flex-row md:space-y-0">
              <li>
                <button
                  href="/ConferenceEvent"
                  className="text-md font-medium"
                  onClick={() => navigationNavbarHandler("Venue")}
                >
                  Venue
                </button>
              </li>
              <li>
                <button
                  href=""
                  className="text-md font-medium"
                  onClick={() => navigationNavbarHandler("Add-Ons")}
                >
                  Add-Ons
                </button>
              </li>
              <li>
                <button
                  href=""
                  className="text-md font-medium"
                  onClick={() => navigationNavbarHandler("Meals")}
                >
                  Meals
                </button>
              </li>
              <li>
                <button
                  className="text-md font-medium rounded-full bg-brightRed px-5 py-2 text-center text-white hover:bg-brightRedLight md:block"
                  onClick={() => navigationNavbarHandler("ShowDetails")}
                >
                  Show Details
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <section id="venue-room ">
        {navbar === "Venue" ? (
          <Venue />
        ) : navbar === "Add-Ons" ? (
          <AddsOn />
        ) : navbar === "Meals" ? (
          <Meals />
        ) : navbar === "ShowDetails" ? (
          <ShowDetails />
        ) : (
          <Venue />
        )}
      </section>
    </>
  );
};

export default ConferenceEvent;
