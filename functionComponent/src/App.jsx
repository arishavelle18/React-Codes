import EmployeeDetails from "./EmployeeDetails";
function App() {
  return (
    <>
      <div>
        <EmployeeDetails
          name={"Karl"}
          emp_id={1100}
          dept_id={234}
          increase={10000}
        />
      </div>
    </>
  );
}

export default App;
