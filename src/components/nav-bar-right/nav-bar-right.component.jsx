import "./nav-bar-right.styles.css";
import { useNavigate } from "react-router-dom";

const NavBarRight = () => {
  const navigate = useNavigate();

  return (
    <div className="vertical-right-bar">
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/contact")}>Contact</button>
      <button onClick={() => navigate("/projects")}>Projects</button>
      <button onClick={() => navigate("/skills")}>Skills</button>
      <div className="vertical-right"></div>
    </div>
  );
};

export default NavBarRight;
