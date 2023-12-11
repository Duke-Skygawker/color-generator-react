import { useState } from "react";

const Form = ({ submitColor }) => {
  const [color, setColor] = useState("#000000");

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitColor(color);
  };

  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form" action="" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          name="color"
          id="color"
          onChange={handleChange}
        />
        <input
          type="text"
          value={color}
          name="color-text"
          id="color-text"
          onChange={handleChange}
        />
        <button
          className="btn"
          type="submit"
          style={{ backgroundColor: color }}
        >
          Submit
        </button>
      </form>
    </section>
  );
};
export default Form;
