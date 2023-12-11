const SingleColor = ({ color, index }) => {
  const { hex, weight, type } = color;
  return (
    <div className="color" style={{ backgroundColor: color.hexString() }}>
      <p className={type !== "tint" ? "color-light" : ""}>{weight}%</p>
      <p className={type !== "tint" ? "color-light" : ""}>#{hex}</p>
    </div>
  );
};
export default SingleColor;
