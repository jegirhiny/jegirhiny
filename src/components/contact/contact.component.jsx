import "./contact.styles.css";
import ContactForm from "../contact-form/contact-form.component";
import NavBarRight from "../nav-bar-right/nav-bar-right.component";
import NavBarLeft from "../nav-bar-left/nav-bar-left.component";

const Contact = () => {
  return (
    <section>
      <div className="highlight-bar" />
      <div className="content">
        <h3 className="highlight">Lets connect.</h3>
        <h1>
          Get in touch<span style={{ color: "#a63d40" }}>.</span>
        </h1>
        <h3>
          I'm always open to new opportunities and collaborations.
          <br />
          Please use the form below to reach out.
        </h3>
        <ContactForm />
      </div>
      <NavBarRight />
      <NavBarLeft />
    </section>
  );
};

export default Contact;
