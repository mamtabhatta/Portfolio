import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
} from "react-icons/fa";
import {
    SiExpress,
    SiMongodb,
    SiMysql,
    SiPostman,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skillGroups = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML", icon: <FaHtml5 /> },
            { name: "CSS", icon: <FaCss3Alt /> },
            { name: "JavaScript", icon: <FaJs /> },
            { name: "React", icon: <FaReact /> },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
        ],
    },
    {
        title: "Database",
        skills: [
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "MySQL", icon: <SiMysql /> },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: <FaGitAlt /> },
            { name: "GitHub", icon: <FaGithub /> },
            { name: "Postman", icon: <SiPostman /> },
        ],
    },
];

function Skills() {
    return (
        <section id="skills">
            <div className="reveal visible">
                <p className="section-label">What I Work With</p>
                <h2 className="section-title">Skills</h2>
                <div className="section-divider"></div>

                <div className="skills-grid">
                    {skillGroups.map((group) => (
                        <div className="skill-group" key={group.title}>
                            <h3 className="skill-group-title">{group.title}</h3>

                            <div className="skill-tags">
                                {group.skills.map((skill) => (
                                    <div className="skill-tag" key={skill.name}>
                                        <span className="skill-icon">{skill.icon}</span>
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;