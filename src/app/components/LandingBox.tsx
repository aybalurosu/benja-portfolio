
import "./../css/landing.css";


export default function LandingBox() {

  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-15 relative z-10">
      <div className="text-center text-white flex flex-col items-center justify-center pt-0 pb-0 p-5 w-4xl">
        <h1 className="text-6xl font-semibold mb-4">
          Designed for Designers to showcase their work
        </h1>
        <p className="text-xl mb-6 w-lg">
          Helping startups and brands to craft expressive and engaging solutions
          for their software needs.
        </p>
      </div>
    </section>
  );
}
