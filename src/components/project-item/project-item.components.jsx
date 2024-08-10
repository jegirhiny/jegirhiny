import "./project-item.styles.css";

const ProjectItem = ({ image, title, link, desc, tech }) => {
  const handleClick = (e) => {
    const clickedHead = e.currentTarget;
    const projectContainer = clickedHead.parentElement;
    const dropdown = projectContainer.querySelector(".dropdown");
    const isActive = dropdown.classList.contains("active");

    if (isActive) {
      dropdown.classList.remove("active");
    } else {
      const activeElements = document.querySelectorAll(".dropdown.active");
      activeElements.forEach((item) => item.classList.remove("active"));
      dropdown.classList.add("active");
    }

    const icons = document.querySelectorAll(".toggle-icon");
    icons.forEach((item) => (item.textContent = "▼"));

    const toggleIcon = clickedHead.querySelector(".toggle-icon");
    toggleIcon.textContent = isActive ? "▼" : "▲";
  };

  return (
    <div className="project">
      <div className="project-head" onClick={(e) => handleClick(e)}>
        {image}
        <h3 style={{ width: "-webkit-fill-available", pointerEvents: "none" }}>
          {title}
        </h3>
        <h3 className="highlight toggle-icon">▼</h3>
      </div>
      <div className="dropdown">
        <h3 style={{ margin: "20px" }}>{desc}</h3>
        <div style={{ display: "flex" }}>
          {tech.map((tech, index) => (
            <div className="tech">
              <h3 key={index}>{tech}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
