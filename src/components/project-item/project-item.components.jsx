import "./project-item.styles.css";

const ProjectItem = ({ title, desc, tech, link }) => {
  return (
    <div className="projects-div-inner">
      <h2>{title}</h2>
      <div className="row">
        {tech.map((item, index) => {
          return (
            <h3 key={index} className="tech-used">
              {item}
            </h3>
          );
        })}
      </div>
      <p>{desc}</p>
      <a href={link} className="github">
        View Project
      </a>
    </div>
  );
};

export default ProjectItem;
