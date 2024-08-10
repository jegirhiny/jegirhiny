import "./skills.styles.css";
import NavBarRight from "../nav-bar-right/nav-bar-right.component";
import NavBarLeft from "../nav-bar-left/nav-bar-left.component";

const Skills = () => {
  return (
    <section>
      <div className="highlight-bar" />
      <div className="content">
        <div style={{ marginBottom: "40px" }}>
          <h3 className="highlight">My expertise.</h3>
          <h1>
            Skills on offer<span style={{ color: "#a63d40" }}>.</span>
          </h1>
          <h3 style={{ marginTop: "5px" }}>
            I'm passionate about crafting innovative web applications that boost
            user engagement and deliver impactful results.
          </h3>
        </div>
        <div style={{ margin: "10px 0 0 0" }}>
          <h3 className="highlight">Frontend</h3>
          <div className="skills">
            <h3>JavaScript</h3>
            <h3>HTML</h3>
            <h3>CSS</h3>
            <h3>React</h3>
          </div>
          <h3 className="highlight" style={{ marginTop: "20px" }}>
            Backend
          </h3>
          <div className="skills">
            <h3>Java</h3>
            <h3>Node.js</h3>
            <h3>Express</h3>
            <h3>PostgreSQL</h3>
          </div>
          <h3 className="highlight" style={{ marginTop: "20px" }}>
            Other
          </h3>
          <div className="skills">
            <h3>Git</h3>
            <h3>Jest</h3>
            <h3>Prisma</h3>
          </div>
        </div>
      </div>
      <NavBarRight />
      <NavBarLeft />
    </section>
  );
};

export default Skills;
