import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Form from "./components/Form";
import ColorList from "./components/ColorList";
import Values from "values.js";

const App = () => {
  const [submittedColor, setSubmittedColor] = useState("");
  const [colorList, setColorList] = useState([]);

  const addColor = (color) => {
    try {
      // the number, 10, in this case is a step of incrementing the shades, possible future functionality to add, change the number per user input 1-100
      const newList = new Values(color).all(10);
      setColorList(newList);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (submittedColor) {
      addColor(submittedColor);
    }
  }, [submittedColor]);
  return (
    <main>
      <Form submitColor={setSubmittedColor} />
      <ColorList list={colorList} toast={toast} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
