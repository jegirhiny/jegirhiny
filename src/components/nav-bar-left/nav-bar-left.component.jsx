import "./nav-bar-left.styles.css";

const NavBarLeft = () => {
  return (
    <div className="vertical-left-bar">
      <a href="https://github.com/jegirhiny">
        <img src="../images/github-logo-240.png" alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/jegirhiny/">
        <img src="../images/linkedin-logo-240.png" alt="Instagram" />
      </a>
      <div className="vertical-left"></div>
    </div>
  );
};

export default NavBarLeft;
