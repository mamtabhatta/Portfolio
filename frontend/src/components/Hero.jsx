function Hero() {
    return (
        <section id="hero">
            <div className="hero-mesh"></div>
            <div className="hero-grid"></div>

            <div className="hero-content">
                <div className="hero-eyebrow">Open to Opportunities</div>

                <h1 className="hero-title">
                    Hi, I'm <span className="accent">Mamta Bhatta</span>
                </h1>

                <p className="hero-role">
                    <strong>Aspiring Full-Stack Developer</strong>
                </p>

                <p className="hero-desc">
                    I build responsive web applications with React, Node.js, Express.js, and MongoDB, focusing on clean design, practical functionality, and seamless user experiences.
                </p>

                <div className="hero-btns">
                    <a href="#projects" className="btn-primary">View Projects</a>
                    <a href="#contact" className="btn-outline">Contact Me</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;