import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <>
      <div className="container flex flex-col py-20">
        <header className="hidden">
          <h1>Course Expense Planner</h1>
          <nav>
            <ul>
              <li></li>
              <li>
                <a href="#">Venue</a>
              </li>
              <li>
                <a href="#">Add-ons</a>
              </li>
              <li>
                <a href="#">Meals</a>
              </li>
              <li>
                <a href="#">Meals</a>
              </li>
              <li>
                <a href="#">Show Details</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layouts;
