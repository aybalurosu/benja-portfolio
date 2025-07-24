export default function LandingBox() {
  return (
    <section className="min-h-screen flex items-center justify-center relative z-10">
      <div className="text-center text-white flex flex-col items-center justify-center p-5 w-4xl">
        <h1 className="text-6xl font-semibold mb-4">
          Designed for Designers to showcase their work
        </h1>
        <p className="text-xl mb-6 w-lg">
          Helping startups and brands to craft expressive and engaging solutions
          for their software needs.
        </p>
        <button className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300">
          Contact
        </button>
      </div>
    </section>
  );
}
