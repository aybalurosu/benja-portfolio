import Image from "next/image";
import "./../css/projects.css";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen relative z-10 flex flex-col items-center justify-center gap-9 p-10"
    >
      <div className="w-[80%]">
        <div className="w-[50%]">
          <h1 className="text-7xl font-medium mb-9 text-[#B5C0CC]">
            Projects, Purpose Into Ideas!
          </h1>
          <p className="text-[#a0b2cf]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            eius tenetur laudantium enim, dicta ducimus optio dolor delectus
            accusamus necessitatibus rem quod soluta possimus cumque quibusdam
            aspernatur velit ratione fugit!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            eius tenetur laudantium enim, dicta ducimus optio dolor delectus
            accusamus necessitatibus rem quod soluta possimus cumque quibusdam
            aspernatur velit ratione fugit!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-10">
          <div className="hover-card border-2 border-[#060d2524] border-t-[#a7cdede4] bg-[#0c14324b] p-6 rounded-xl shadow-3xl h-90">
            <div className="border-2 border-[#060f3043] border-t-[#7a8b9efb] bg-gradient-to-t from-[#44598d70] via-[#081a4b93] to-[#000c2b] p-6 rounded-lg shadow-2xl text-white w-165 h-75">
              <h3 className="text-3xl font-semibold">Project</h3>
              <p className="">Proficient in modern Project .</p>
            </div>
          </div>
          <div className="hover-card border-2 border-[#060d2524] border-t-[#a7cdede4] bg-[#0c14324b] p-6 rounded-xl shadow-3xl h-90">
            <div className="bborder-2 border-[#060f3043] border-t-[#7a8b9efb] bg-gradient-to-t from-[#44598d70] via-[#081a4b93] to-[#000c2b] p-6 rounded-lg shadow-2xl text-white w-165 h-75">
              <h3 className="text-3xl font-semibold">Project</h3>
              <p className="">Proficient in modern Project.</p>
            </div>
          </div>
          <div className="hover-card border-2 border-[#060d2524] border-t-[#a7cdede4] bg-[#0c14324b] p-6 rounded-xl shadow-3xl h-90">
            <div className="bborder-2 border-[#060f3043] border-t-[#7a8b9efb] bg-gradient-to-t from-[#44598d70] via-[#081a4b93] to-[#000c2b] p-6 rounded-lg shadow-2xl text-white w-165 h-75">
              <h3 className="text-3xl font-semibold">Project</h3>
              <p className="">Proficient in modern Project .</p>
            </div>
          </div>
          <div className="hover-card border-2 border-[#060d2524] border-t-[#a7cdede4] bg-[#0c14324b] p-6 rounded-xl shadow-3xl h-90">
            <div className="bborder-2 border-[#060f3043] border-t-[#7a8b9efb] bg-gradient-to-t from-[#44598d70] via-[#081a4b93] to-[#000c2b] p-6 rounded-lg shadow-2xl text-white w-165 h-75">
              <h3 className="text-3xl font-semibold">Project</h3>
              <p className="">Proficient in modern Project .</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
