const SingleColor = ({ color, toast }) => {
  const { hex, weight, type } = color;

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Text copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy text: ", error);
    }
  }

  const handleClick = () => {
    const hexValue = "#" + hex;
    copyToClipboard(hexValue);
  };

  return (
    <div
      className="color"
      style={{ backgroundColor: color.hexString() }}
      onClick={handleClick}
    >
      <p className={type !== "tint" ? "color-light" : ""}>{weight}%</p>
      <p className={type !== "tint" ? "color-light" : ""}>#{hex}</p>
    </div>
  );
};
export default SingleColor;
