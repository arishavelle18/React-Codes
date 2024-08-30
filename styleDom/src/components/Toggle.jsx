import { useState } from "react";
import styles from "./toggle.module.css";
const Toggle = () => {
  const [isVisible, setIsVisible] = useState(true);
  const messageStyle = {
    display: isVisible ? "block" : "none",
    color: "green",
    fontSize: "18px",
    marginTop: "10px",
    padding: "1rem",
    borderTop: "1rem",
    border: "1px solid black",
  };
  return (
    <>
      <div>
        <h2>toggleMessage</h2>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "Hide Message" : "Show Message"}
        </button>
        <p style={messageStyle}>This is hidden messag</p>
      </div>
    </>
  );
};
export default Toggle;
