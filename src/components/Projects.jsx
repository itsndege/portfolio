import projects from "../data/projectData";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import FadeInSection from "./FadeInSection";

function Projects() {
    return (
        <FadeInSection>
        <section
            id="projects"
            className=" scroll-mt-20 max-w-6xl mx-auto py-24 px-8"
        >
            <h2 className="text-4xl font-bold text-center mb-6">
                My Projects
            </h2>

            <p className="text-center text-slate-400 max-w-2xl mx-auto">
                Here are some of the projects I've built while learning and
                improving my software development skills.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="group bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg hover:border-cyan-500 hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300 flex flex-col"
                    >
                        <div className="overflow-hidden rounded-lg mb-6">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">
                            {project.title}
                        </h3>

                        <p  className="text-slate-400 leading-7 mb-6">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">

                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-slate-700 px-3 py-1 rounded-full text-xs font-medium text-cyan-300"
                                >
                                    {tech}
                                </span>
                            ))}

                        </div>

                        <div className="flex gap-4 mt-auto">

                            <a
                                 href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-cyan-500 text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-500              hover:text-white transition-all duration-300">
                                <FaGithub />
                                GitHub
                            </a>

                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"   
                                className="flex items-center gap-2 bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600    transition-all duration-300">
                                <FaExternalLinkAlt className="text-sm" />
                                Live Demo
                            </a>

                        </div>

                    </div>
                ))}

            </div>

        </section>
        </FadeInSection>
    );
}

export default Projects;