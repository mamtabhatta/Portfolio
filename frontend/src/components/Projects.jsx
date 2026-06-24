function Projects() {
    const projects = [
        {
            emoji: "🎬",
            className: "p1",
            name: "Movie Rating App",
            desc: "Search any movie and instantly view ratings, plot summaries, and cast details, powered by a live movie database API.",
            stack: ["React", "JavaScript", "Node.js","MongoDB"],
        },
    
       
        {
            emoji: "🎵",
            className: "p4",
            name: "Music App",
            desc: "A full-stack music player where users can upload, manage, and stream songs, with cloud storage via Supabase and a React frontend.",
            stack: ["React", "Node.js", "MongoDB", "Supabase"],
        },
    ];

    return (
        <section id="projects">
            <div className="reveal visible">
                <p className="section-label">My Work</p>
                <h2 className="section-title">Projects</h2>
                <div className="section-divider"></div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div className="project-card" key={project.name}>
                            <div className={`project-img ${project.className}`}>
                                <span className="proj-emoji">{project.emoji}</span>
                            </div>

                            <div className="project-body">
                                <h3 className="project-name">{project.name}</h3>
                                <p className="project-desc">{project.desc}</p>

                                <div className="project-stack">
                                    {project.stack.map((item) => (
                                        <span className="stack-chip" key={item}>
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a
                                        href="https://github.com/mamtabhatta"
                                        target="_blank"
                                        className="proj-link proj-link-gh"
                                    >
                                        GitHub
                                    </a>

                                    <a href="https://github.com/mamtabhatta/music-app-mern.git" target="_blank" className="proj-link proj-link-live">
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;