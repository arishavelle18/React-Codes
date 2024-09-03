import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
    rating: "",
    radioInput: "",
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    setFormData({
      ...formData,
      [name]: value,
      radioInput: type === "radio" ? event.target : "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const confirmMessage = `
    Name: ${formData.name}
    Email: ${formData.email}
    Feedback: ${formData.feedback}
    Rating: ${formData.rating}`;

    const isConfirmed = window.confirm(
      `Please confirm your details: \n\n${confirmMessage}`
    );
    if (isConfirmed) {
      console.log("Submiting feedback:", formData);
      formData.radioInput.checked = false;
      setFormData({
        name: "",
        email: "",
        feedback: "",
        rating: null,
        radioInput: "",
      });
      alert("Thank you for your valuable feedback");
    }
  };

  return (
    <>
      <nav className="bg-red">
        <div className="container mx-auto py-3">
          <h1 className="text-center font-bold text-white text-6xl">
            Tell Us What You Think
          </h1>
        </div>
      </nav>
      <section id="feedback">
        <div className="container mx-auto mt-20 flex flex-col items-center outline-black ">
          <div className="outline outline-offset-2 outline-1 outline-lightRed rounded-sm  px-5 py-7 space-y-4">
            <h1 className="text-4xl text-bolder">
              We'd Love to Hear From You!
            </h1>
            <p>Please share your feedback with us</p>
            <div className="flex flex-col">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="outline outline-offset-2 outline-1 py-1 px-1 outline-lightRed"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="outline outline-offset-2 outline-1 py-1 px-1 outline-lightRed"
                />
                <textarea
                  name="feedback"
                  id="feedback"
                  placeholder="Your Feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  className="outline outline-offset-2 outline-1 py-1 px-1 outline-lightRed"
                ></textarea>
                <label htmlFor="">Rate Us:</label>
                <div className="flex flex-col space-y-3 ">
                  <div className="flex flex-row space-x-2 ">
                    <input
                      type="radio"
                      name="rating"
                      value={1}
                      onChange={handleChange}
                    />
                    <label htmlFor="one">1</label>
                  </div>
                  <div className="flex flex-row space-x-2 ">
                    <input
                      type="radio"
                      name="rating"
                      value={2}
                      onChange={handleChange}
                    />
                    <label htmlFor="two">2</label>
                  </div>
                  <div className="flex flex-row space-x-2 ">
                    <input
                      type="radio"
                      name="rating"
                      value={3}
                      onChange={handleChange}
                    />
                    <label htmlFor="three">3</label>
                  </div>
                  <div className="flex flex-row space-x-2 ">
                    <input
                      type="radio"
                      name="rating"
                      value={4}
                      onChange={handleChange}
                    />
                    <label htmlFor="four">4</label>
                  </div>
                  <div className="flex flex-row space-x-2 ">
                    <input
                      type="radio"
                      name="rating"
                      value={5}
                      onChange={handleChange}
                    />
                    <label htmlFor="five">5</label>
                  </div>
                </div>

                <button className="bg-otherRed text-white px-3 py-2 rounded-md">
                  Submit Feedback
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
