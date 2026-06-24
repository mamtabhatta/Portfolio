import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">
      <div className="reveal visible">
        <p className="section-label">Let's Connect</p>

        <h2 className="section-title">Get In Touch</h2>

        <div className="section-divider"></div>

        <p className="contact-sub">
          I'm currently open to internships, freelance projects, and
          collaborations.
        </p>

        <div className="contact-links">
          <a
            href="mailto:bhattmamta001@gmail.com"
            className="contact-link"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/mamtabhatta"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/mamta-bhatta-b42a3a0"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section >
  );
}

export default Contact;