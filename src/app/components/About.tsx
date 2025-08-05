import Image from "next/image";
import Lines from "./Lines";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center gap-15 relative z-10">
        <div className="inline-flex items-start justify-center gap-20">
            <Image className="rounded-3xl border-1 border-blue-950" src="/about/about.jpeg" alt="About Image" width={400} height={300} />
            <div className="w-100 top-20">
                <h4 className="text-base font-semibold text-[#b5c1d0]">Benjamín Porras Gómez</h4>
                <h1 className="text-8xl font-medium text-[#b5c0cc]">About</h1>
                <div className="mt-7 text-[#bdbfc4] flex flex-col gap-4">
                    <p>Throughout my career, I’ve had the privilege of working with 
                    both rising startups and industry leaders, 
                    including Apple, Tesla, and Stripe. These experiences have shaped my perspective on innovation, 
                    efficiency, and user-centric design.
                    </p>
                    <p>What sets my work apart is my intentional approach, the method of designing meaningful interfaces 
                        that drive results…
                        My journey with product design started in a quite surprising way, it had begun after watching a 
                        science fiction movie…
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}