import {FaLocationDot} from "react-icons/fa6";
import {FaGraduationCap} from "react-icons/fa";
import {MdComputer} from "react-icons/md";
import profile from "../assets/images/profile.jpeg";


function Hero({ name, title, location, university }) {
  return (
    <section
      id="home"
      className="scroll-mt-20 max-w-6xl mx-auto flex items-center justify-between min-h-[85vh] px-8"
    >
      {/* Left Side */}
      <div className="max-w-2xl">
        

        <h1 className="text-7xl font-bold mb-6">
          {name}
        </h1>

        <h2 className="text-2xl text-slate-400 mt-4">
          {title}
        </h2>
            <div className="flex flex-wrap gap-6 mt-6 text-slate-300">

    <div className="flex items-center gap-2">
        <FaLocationDot className="text-cyan-400" />
        <span>{location}</span>
    </div>

    <div className="flex items-center gap-2">
        <FaGraduationCap className="text-cyan-400" />
        <span>BSc Information Technology • {university}</span>
    </div>

    <div className="flex items-center gap-2">
        <MdComputer className="text-cyan-400" />
        <span>Learning Full-Stack Development & Cybersecurity</span>
    </div>

</div>

        <p className="text-slate-300 mt-6 leading-8">
          I'm an IT graduate from {university} building responsive web applications with React. I'm currently strengthening my skills in full-stack development and cybersecurity while working on projects that solve practical problems.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Side */}
      
      <div className="hidden md:flex">
  <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-500 shadow-xl">
    <img
      src={profile}
      alt="Silas Ochieng"
      className="w-full h-full object-cover"
    />
  </div>
</div>
    </section>
  );
}

export default Hero;