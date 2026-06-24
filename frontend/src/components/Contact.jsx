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
          <a href="mailto:mamtabhatt@email.com" className="contact-link">
            bhattmamta001@gmail.com
          </a>

          <a
            href="https://github.com/mamtabhatta"
            target="_blank"
            className="contact-link"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/mamta-bhatta-b42a3a0"
            target="_blank"
            className="contact-link"
          >
            LinkedIn
          </a>
        </div>

        {/* <a
          href="mailto:mamtabhatt@email.com"
          className="btn-primary"
          style={{ display: "inline-block" }}
        >
          Say Hello
        </a> */}
      </div>
    </section>
  );
}

export default Contact;