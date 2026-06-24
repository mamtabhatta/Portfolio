function About() {
    return (
        <section id="about">
            <div className="reveal visible">
                <p className="section-label">Get to Know Me</p>
                <h2 className="section-title">About Me</h2>
                <div className="section-divider"></div>

                <div className="about-grid">
                    <div className="about-text">
                        <p>
                            I'm a{" "}
                            <strong style={{ color: "var(--lavender)" }}>
                                Bachelor of Information Management (BIM)
                            </strong>{" "}
                            I build modern web applications using React, Node.js, Express.js, and MongoDB. By working on personal projects, I've strengthened my understanding of frontend and backend development, responsive design, database management, and API integration.
                            I enjoy creating clean, functional applications and exploring new technologies that help bring ideas to life.

                        </p>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;