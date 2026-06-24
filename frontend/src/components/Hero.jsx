import laptop_transparent from "../assets/laptop_transparent.png";

function Hero() {
    return (
        <section id="hero">
            <div className="hero-mesh"></div>
            <div className="hero-grid"></div>

            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-eyebrow">Open to Opportunities</div>

                    <h1 className="hero-title">
                        Hi, I'm <span className="accent">Mamta Bhatta</span>
                    </h1>

                    <p className="hero-role">
                        <strong>Full-Stack Developer</strong>
                    </p>

                    <p className="hero-desc">
                        I build clean, responsive, and user-friendly web applications using
                        React, Node.js, Express.js, and MongoDB. I enjoy turning ideas into
                        functional digital experiences with simple design and solid code.
                    </p>

                    <div className="hero-btns">
                        <a href="#projects" className="btn-primary">
                            View Projects
                        </a>

                        <a href="#contact" className="btn-outline">
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <img src={laptop_transparent} alt="Developer Illustration" />
                </div>
            </div>
        </section>
    );
}

export default Hero;