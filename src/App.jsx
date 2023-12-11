import { useEffect, useState } from "react";
import Form from "./components/Form";
import ColorList from "./components/ColorList";
import Values from "values.js";

const App = () => {
  const [submittedColor, setSubmittedColor] = useState("");
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    if (submittedColor) {
      const newList = new Values(submittedColor).all(10);
      setColorList(newList);
      console.log(colorList);
    }
  }, [submittedColor]);

  return (
    <main>
      <Form submitColor={setSubmittedColor} />
      <ColorList list={colorList} />
    </main>
  );
};
export default App;
