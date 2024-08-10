import "./landing.styles.css";
import { useNavigate } from "react-router-dom";
import NavBarRight from "../nav-bar-right/nav-bar-right.component";
import NavBarLeft from "../nav-bar-left/nav-bar-left.component";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div className="highlight-bar" />
      <div className="content">
        <h3 className="highlight">Hello,</h3>
        <h1>
          I'm Jake Girhiny<span style={{ color: "#a63d40" }}>.</span>
        </h1>
        <h3 style={{ marginTop: "5px" }}>
          Full Stack Developer with expertise in building web applications using
          Node.js, Express, React, and PostgreSQL.
        </h3>
        <div className="landing-options">
          <button className="btn-primary" onClick={() => navigate("/contact")}>
            Contact
          </button>
          <button className="btn-primary" onClick={() => navigate("/projects")}>
            Projects
          </button>
          <button className="btn-primary" onClick={() => navigate("/skills")}>
            Skills
          </button>
        </div>
      </div>
      <NavBarRight />
      <NavBarLeft />
    </section>
  );
};

export default Landing;
