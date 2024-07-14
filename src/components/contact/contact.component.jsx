import "./contact.styles.css";

const ContactInfo = () => {
  return (
    <div className="contact-info-div">
      <h1>Reaching out?</h1>
      <h2>Look no further</h2>
      <p>
        Open to new connections and opportunities!
        <br />
        Feel free to reach out for questions, casual chats, or potential
        collaborations.
      </p>
      <a href="mailto:jegirhiny@gmail.com" className="contact-me-button">
        Say "hello"
      </a>
    </div>
  );
};

export default ContactInfo;
