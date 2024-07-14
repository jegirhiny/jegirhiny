import "./landing.styles.css";

const Landing = () => {
  return (
    <section className="landing-div">
      <div>
        <h3 className="landing-my-name">H e l l o .</h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="horizontal-line"></div>
          <h1>I'm Jake</h1>
        </div>
        <h2>Software Developer</h2>
        <a href="#about" className="landing-more">
          ⤵
        </a>
      </div>
    </section>
  );
};

export default Landing;
