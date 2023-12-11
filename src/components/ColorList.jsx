import { v4 as uuidv4 } from "uuid";
import SingleColor from "./SingleColor";

const ColorList = ({ list }) => {
  return (
    <section className="colors">
      {list.map((color, index) => {
        const id = uuidv4();
        return <SingleColor index={index} color={color} key={id} />;
      })}
    </section>
  );
};
export default ColorList;
