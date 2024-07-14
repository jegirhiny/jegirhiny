import "./heading.styles.css";

const Heading = ({ text }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", height: "10vh" }}>
      <div className="line"></div>
      <h2 className="text">{text}</h2>
      <div className="line"></div>
    </div>
  );
};

export default Heading;
