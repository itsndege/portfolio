import {skills} from "../data/skills.js";
import FadeInSection from "./FadeInSection";

function Skills() {
    return (
        <FadeInSection>
        <section 
            id="skills" 
            className="scroll-mt-20 max-w-6xl mx-auto py-24 px-8">
            <h2 className="text-4xl font-bold mb-16 text-center">
                Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {skills.map((skill) => {
    const Icon = skill.icon;

    return (
        <div
            key={skill.category}
            className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300 min-h-64"
        >
            <div className="flex items-center gap-3 mb-5">
                <Icon className="text-cyan-400 text-2xl" />

                <h3 className="text-xl font-semibold text-cyan-400">
                    {skill.category}
                </h3>
            </div>

            <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                    <span
                        key={item}
                        className="bg-slate-700 text-cyan-300 px-3 py-1 rounded-full text-sm hover:bg-cyan-500 hover:text-white transition-colors duration-300"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
})}
            </div>
        </section>
        </FadeInSection>
    );

}
export default Skills;