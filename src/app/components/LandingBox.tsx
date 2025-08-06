
import "./../css/landing.css";
import "./../css/text_styles.css";
import BgGradient from "./BgGradient";

export default function LandingBox() {

  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-5 relative z-10">
      <BgGradient />
      <div className="absolute z-30 flex flex-col items-center justify-center">
        <div className="text-center text-white flex flex-col items-center justify-center pt-0 pb-0 p-5 w-4xl">
          <h1 className="text-7xl font-semibold mb-4 bg-gradient-to-tr from-[#435dc2] via-[rgb(142,183,230)] to-[#afdef1] text-transparent bg-clip-text">
            Designed for Designers to showcase their work
          </h1>
          <p className="text-xl mb-6 w-lg">
            Helping startups and brands to craft expressive and engaging solutions
            for their software needs.
          </p>
        </div>
        <button className="rounded-4xl bg-[#3f3fb8c3] p-3.5 text-white">Get In Touch</button>
      </div>
    </section>
  );
}
