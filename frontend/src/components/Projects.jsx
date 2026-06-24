
function Projects() {
  const projects = [
    {
      icon: "🎬",
      name: "Movie Journal App",
      desc: "A full-stack movie application that allows users to search movies, explore details, and manage a personal watchlist with secure authentication.",
      stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
      github: "https://github.com/mamtabhatta",
    //   live: "https://your-movie-app.vercel.app",
    },

    {
      icon: "🎵",
      name: "Music App",
      desc: "A MERN-based music streaming platform where users can upload, manage, and play songs with media storage powered by Supabase.",
      stack: ["React", "Node.js", "Express.js", "MongoDB", "Supabase"],
      github: "https://github.com/mamtabhatta/music-app-mern.git",
    //   live: "https://your-music-app.vercel.app",
    },
  ];

  return (
    <section id="projects">
      <div className="reveal visible">
        <p className="section-label">Selected Work</p>

        <h2 className="section-title">Projects</h2>

        <div className="section-divider"></div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.name}>
              <div className="project-img">
                <span className="proj-emoji">{project.icon}</span>
              </div>

              <div className="project-body">
                <h3 className="project-name">{project.name}</h3>

                <p className="project-desc">{project.desc}</p>

                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span className="stack-chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link proj-link-gh"
                  >
                    GitHub
                  </a>

                  {/* <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link proj-link-live"
                  >
                    Live Demo
                  </a> */}
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
