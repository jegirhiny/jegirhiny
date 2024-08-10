import "./featured-projects.styles.css";
import {
  LuShoppingBag,
  LuCloudLightning,
  LuLock,
  LuType,
} from "react-icons/lu";
import ProjectItem from "../project-item/project-item.components";
import NavBarRight from "../nav-bar-right/nav-bar-right.component";
import NavBarLeft from "../nav-bar-left/nav-bar-left.component";

const Projects = () => {
  return (
    <section>
      <div className="highlight-bar" />
      <div className="content">
        <div style={{ marginBottom: "40px" }}>
          <h3 className="highlight">Explore my work.</h3>
          <h1>
            View my projects<span style={{ color: "#a63d40" }}>.</span>
          </h1>
          <h3 style={{ marginTop: "5px" }}>
            I'm excited to share the projects I've been working on. Feel free to
            browse the links below to see what I've been up to.
          </h3>
        </div>
        <ProjectItem
          image={<LuShoppingBag className="icon" />}
          title="E-Commerce Website"
          link="https://github.com/jegirhiny/my-market"
          desc="Minimalistic marketplace designed with performance in mind, offering a seamless shopping experience with a clean user interface."
          tech={["PostgreSQL", "Express", "React", "Node.js"]}
        />
        <ProjectItem
          image={<LuCloudLightning className="icon" />}
          title="Weather App"
          link="https://github.com/jegirhiny/weather-app"
          desc="Dynamic weather application offering real-time weather updates and forecasts, all in one convenient place."
          tech={["Axios", "JavaScript", "HTML", "CSS"]}
        />
        <ProjectItem
          image={<LuLock className="icon" />}
          title="Password Generator"
          link="https://github.com/jegirhiny/password-generator"
          desc="Robust and user-friendly password generator, designed to effortlessly create secure and customizable passwords."
          tech={["Axios", "JavaScript", "HTML", "CSS"]}
        />
        <ProjectItem
          image={<LuType className="icon" />}
          title="Wordle"
          link="https://github.com/jegirhiny/wordle"
          desc="Rendition of the Wordle game implemented in Java, leveraging the JavaFX framework for user interface"
          tech={["Java", "JavaFX"]}
        />
      </div>
      <NavBarRight />
      <NavBarLeft />
    </section>
  );
};

export default Projects;
