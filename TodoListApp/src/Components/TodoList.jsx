import { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState("");
  const [listInputs, setListInputs] = useState({});

  const handleAddTodo = () => {
    if (headingInput) {
      const newTodo = [...todos];
      setTodos([...newTodo, { heading: headingInput, lists: [] }]);
      setHeadingInput("");
    }
  };
  const handleAddList = (index) => {
    if (listInputs[index] && listInputs[index].trim() !== "") {
      const newTodo = [...todos];
      newTodo[index].lists.push(listInputs[index]);
      setTodos(newTodo);
      setListInputs({});
    }
  };
  const handleDeleteTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };
  const handleListInputChange = (index, value) => {
    setListInputs({ [index]: value });
  };
  return (
    <>
      <div className="container mx-auto d-flex flex-column justify-content-center align-items-center w-75-md card m-3 p-3">
        <h1 className="mb-3">My Todo List</h1>
        <div className="d-flex flex-column w-100">
          <div className="form-group mb-5">
            <input
              type="text"
              placeholder="Enter the heading"
              className=" form-control"
              value={headingInput}
              maxLength={30}
              onChange={(event) => setHeadingInput(event.target.value)}
            />
          </div>

          <button
            className="btn btn-success mb-3 w-25 align-self-center"
            onClick={handleAddTodo}
          >
            Add Heading
          </button>
        </div>
        <div className="todoMain row w-100 gy-3">
          {todos.map((todo, index) => (
            <div
              key={index}
              className="col-12 card  justify-content-center  align-items-center"
            >
              <div className="d-flex align-items-center justify-content-between w-100 p-4 text flex-wrap">
                <h3 className="w-90">{todo.heading}</h3>
                <button
                  className="btn btn-danger w-10"
                  onClick={() => handleDeleteTodo(index)}
                >
                  Delete Heading
                </button>
              </div>
              <div className="d-flex align-item-center flex-column justify-content-between w-100 p-4">
                {todo.lists.map((list, childIndex) => (
                  <div key={childIndex}>
                    <p>
                      {childIndex + 1}. {list}
                    </p>
                  </div>
                ))}
              </div>
              <div className="w-100 add-list d-flex align-items-center justify-content-center">
                <input
                  type="text"
                  placeholder="Add List"
                  className="form-control w-75 m-2"
                  value={listInputs[index] || ""}
                  maxLength={100}
                  onChange={(event) =>
                    handleListInputChange(index, event.target.value)
                  }
                />
                <button
                  className="btn btn-success w-25 m-2"
                  onClick={() => handleAddList(index)}
                >
                  Add List
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoList;
