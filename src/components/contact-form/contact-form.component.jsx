import "./contact-form.styles.css";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formRes, setFormRes] = useState("");
  const [formData, setFormData] = useState({
    from: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from: formData.from,
      email: formData.email,
      message: formData.message,
    };

    try {
      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          templateParams
        )
        .then(
          (res) => {
            console.log("MESSAGE SUCCESSFUL.", res.status, res.text);
          },
          (error) => {
            console.log("MESSAGE FAILED.", error);
          }
        );

      setFormRes("Message sent.");
    } catch (error) {
      setFormRes("Message failed.");
    }

    e.target.reset();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="from"
        onChange={(e) => handleChange(e)}
        placeholder="Full Name"
        required
      />
      <input
        type="email"
        name="email"
        onChange={(e) => handleChange(e)}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="message"
        onChange={(e) => handleChange(e)}
        placeholder="Message"
        required
      />
      <div className="form-footer">
        <button className="btn-primary" style={{ marginTop: "30px" }}>
          Send Message
        </button>
        <h3 style={{ flex: "1", textAlign: "center" }}>{formRes}</h3>
      </div>
    </form>
  );
};

export default ContactForm;
