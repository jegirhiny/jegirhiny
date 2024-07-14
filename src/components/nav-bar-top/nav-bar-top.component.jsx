import "./nav-bar-top.styles.css";

const Navigation = () => {
  return (
    <div id="landing" className="nav-bar">
      <span className="nav-name">Jake Girhiny</span>
      <ol className="nav-list">
        <a href="#about">
          <span>01.</span>About Me
        </a>
        <a href="#projects">
          <span>02.</span>Projects
        </a>
        <a href="#contact">
          <span>03.</span>Contact
        </a>
        <a href="..\pdfs\Jake_Girhiny_Resume.pdf" id="resume" download>
          Resume
        </a>
      </ol>
    </div>
  );
};

export default Navigation;
