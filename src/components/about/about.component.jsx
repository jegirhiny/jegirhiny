import "./about.styles.css";

const AboutMe = () => {
  return (
    <div className="about-me-background">
      <h1>About Me</h1>
      <h2>Short and sweet</h2>
      <p>
        Hello! My name is Jake. I'm an aspiring software engineer who loves
        creating. Introduced to programming in late 2020, I became fascinated
        with code and began taking courses at{" "}
        <a href="https://www.wma.us/">Wilbraham & Monson Academy</a> (my high
        school). After graduating, I enrolled in the UMass Global{" "}
        <a href="https://www.umassglobal.edu/academic-programs/extended-education/software-engineering-bootcamp">
          Software Engineering Bootcamp
        </a>
        . Today, I'm excited to be actively working towards completing the
        program.
      </p>
      <p>
        Away from the screens, I cherish quality time with friends and family.
        Our adventures often involve scenic hikes, gatherings at{" "}
        <a href="https://www.noodlesnorthampton.com/">Noodles</a> (a delightful
        local Asian eatery), and the occasional high-stake ultimate frisbee
        match. It's all about making lasting memories and savoring the
        excitement of each adventure.
      </p>
    </div>
  );
};

export default AboutMe;
