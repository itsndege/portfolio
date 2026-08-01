import {highlights} from "../data/highlights";
import codepro from "../assets/images/Codepro.png";
import FadeInSection from "./FadeInSection";

function About() {
  return (
    <FadeInSection>
    <section id="about" className="scroll-mt-20 max-w-6xl mx-auto py-24 px-8">

      <h2 className="text-4xl font-bold mb-16 text-center">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-16">

        <div className="w-64 h-64 rounded-xl overflow-hidden">
    <img
        src={codepro}
        alt="Silas Ochieng"
        className="w-full h-full object-cover"
    />
</div>

        <div className="flex-1">

          

          <p className="text-slate-300 leading-8">
            I graduated with a Bachelor of Science in Information Technology from Jomo Kenyatta University of Agriculture and Technology (JKUAT), earning a Second Class Upper Division. During my studies and internships, I developed a strong foundation in software development, networking, and IT support. Today, I'm focused on becoming a full-stack developer while continuing to expand my knowledge of cybersecurity and build practical projects that solve real-world problems.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((highlight) => (
               
                <div 
                    key = {highlight} 
                    className="text-slate-300 px-4 py-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-all
                    duration-300 cursor-default border border-slate-700">
                    <p>{highlight}</p>
                </div>
                
            ))}
          </div>

        </div>

      </div>

    </section>
    </FadeInSection>
  );
}

export default About;