function Skills() {
    return (
        <section id="skills">
            <div className="reveal visible">
                <p className="section-label">What I Work With</p>
                <h2 className="section-title">Skills</h2>
                <div className="section-divider"></div>

                <div className="skills-grid">
                    <SkillGroup title="Frontend" skills={["HTML", "CSS", "JavaScript", "React"]} />
                    <SkillGroup title="Backend" skills={["Node.js", "Express.js"]} />
                    <SkillGroup title="Database" skills={["MongoDB", "MySQL"]} />
                    <SkillGroup title="Tools" skills={["Git", "GitHub", "VS Code", "Postman"]} />
                </div>
            </div>
        </section>
    );
}

function SkillGroup({ title, skills }) {
    return (
        <div className="skill-group">
            <div className="skill-group-title">{title}</div>

            <div className="skill-tags">
                {skills.map((skill) => (
                    <span className="skill-tag" key={skill}>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Skills;