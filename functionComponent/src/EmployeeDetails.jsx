import { useState } from "react";

const EmployeeDetails = (props) => {
  const [showIncrease, setIncrease] = useState(false);

  return (
    <>
      <div>
        <h1>{props.name}</h1>
        <h2>{props.emp_id}</h2>
        <h2>{props.dept_id}</h2>
        <h2>{props.dept_name}</h2>
        <button onClick={() => setIncrease(!showIncrease)}>
          Click to {showIncrease ? "hide" : "show"} the increase
        </button>
        {showIncrease && <div>{props.increase}</div>}
      </div>
    </>
  );
};
EmployeeDetails.defaultProps = {
  dept_name: "Human Resources",
};
export default EmployeeDetails;
