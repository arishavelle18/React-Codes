import { useState } from "react";

function App() {
  const [items, setItems] = useState(["Autumn", "Spring", "Summer", "Winter"]);
  const [inputValue, setInputValue] = useState("");
  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };
  const addItem = () => {
    if (inputValue) {
      setItems([...items, inputValue]);
    }
  };

  return (
    <>
      <ul>
        {items.length > 0 ? (
          items.map((item, index) => (
            <li key={index}>
              {item} <button onClick={() => removeItem(index)}>Remove</button>
            </li>
          ))
        ) : (
          <p>No frontend language available</p>
        )}
      </ul>

      <input
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Add Chores"
      />
      <button onClick={addItem}>Add</button>
    </>
  );
}

export default App;
