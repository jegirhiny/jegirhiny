import "./social-bar-left.styles.css";

const SocialBarLeft = () => {
  return (
    <div className="vertical-left-bar">
      <a href="https://github.com/jegirhiny">
        <img src="../images/github-logo-240.png" alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/jegirhiny/">
        <img src="../images/linkedin-logo-240.png" alt="Instagram" />
      </a>
      <a href="mailto:jegirhiny@gmail.com">
        <img src="../images/envelope-regular-240.png" alt="Gmail" />
      </a>
      <div className="vertical-left"></div>
    </div>
  );
};

export default SocialBarLeft;
