import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { checkIfLandingPage } from "./NavigationSlice";
import { useEffect } from "react";

const GettingStarted = () => {
  const dispatch = useDispatch();
  const checkIfLandingPageHandler = (value) => {
    dispatch(checkIfLandingPage(value));
  };

  useEffect(() => {
    if (window.location.pathname !== "/") {
      dispatch(checkIfLandingPage(false));
    } else {
      dispatch(checkIfLandingPage(true));
    }
  }, [window.location.pathname]);

  return (
    <>
      <div className="container mx-auto flex flex-col text-white px-10 space-y-10 md:space-y-0 h-[calc(100vh)] py-10 overflow-auto md:flex-row ">
        {/* container for title and paragraph */}

        {/*  title */}
        <div className="container mx-auto px-10 py-20 flex flex-col  text-center space-y-8   self-center  text-center md:w-1/2">
          <h1 className="text-2xl font-semibold md:text-4xl">
            Conference Expense Planner
          </h1>
          <p className="text-xl md:text-2xl">
            Plan your next major event with us!
          </p>
          <div className="flex flex-col items-center">
            <Link
              to="/ConferenceEvent"
              className="bg-lightGreen text-black px-2 py-3 rounded-md font-semibold md:px-5 md:py-4"
              onClick={() => checkIfLandingPageHandler(false)}
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* paragraph */}
        <div className="flex flex-col space-y-5  self-center font-normal text-justify text-md px-5 md:w-1/2 md:text-xl">
          <p>
            Welcome to BudgetEase Solutions, your trusted partner in simplifying
            budget management and financial solutions. At BudgetEase, we
            understand the importance of effective budget planning and strive to
            provide intuitive, user-friendly solutions to meet the diverse needs
            of our clients.
          </p>
          <p>
            With a commitment to efficiency and innovation, we empower
            individuals and businesses to take control of their finances and
            achieve their goals with ease.
          </p>
          <p>
            At BudgetEase Solutions, our mission is to make budgeting effortless
            and accessible for everyone. Whether you're a small business owner,
            a busy professional, or an individual looking to manage your
            personal finances, we offer tailored solutions to streamline your
            budgeting process.
          </p>
        </div>
      </div>
    </>
  );
};

export default GettingStarted;
