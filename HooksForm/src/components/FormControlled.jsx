import React, { useState } from "react";
const FormControlled = () => {
  const [email, setEmail] = useState("");
  const SubmitHandler = (event) => {
    event.preventDefault();
    console.log(email);
  };

  return (
    <>
      <form onSubmit={SubmitHandler}>
        <h1>Register</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default FormControlled;
