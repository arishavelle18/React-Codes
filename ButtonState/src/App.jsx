import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Interval tick");
    }, 1000);

    return () => {
      clearInterval(timer); //unmounting
    };
  }, []);

  const [name, setName] = useState("Karl");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const updateName = () => {
    setName("Khielle");
    setButtonClicked(true);
  };
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div>
        <h1>{name}</h1>
        <button onClick={updateName} disabled={buttonClicked}>
          Click to update name
        </button>
        <button onClick={toggleVisibility}>Click to toggle</button>
        <p>{isVisible ? "Show Message" : "Hide Message"}</p>
        {isVisible && <div>This is the hidden message</div>}
      </div>
    </>
  );
}

export default App;
