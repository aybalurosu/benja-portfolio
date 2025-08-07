
import Link from "next/link";
import "./../css/contact.css";
import { Montserrat, Noto_Sans } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['500'] });
const notoSans = Noto_Sans({ subsets: ['latin'], weight: ['500'] });

export default function Contact() {

  return (
    <div id="contact" className="min-h-screen relative z-10 flex flex-col items-center justify-center">
       <div className="contact-box rounded-xl p-10 flex flex-col items-center justify-center gap-10">
           <div className="w-[60%] text-center flex flex-col items-center justify-center gap-5">
                <div className="bg-[#04070E] border-1 border-[#c4dddf] text-[#e2e6ed] pl-4 pr-4 p-2 rounded-lg"><h1 className={`${montserrat.className}`}>LET'S TALK</h1></div>
                <h1 className="text-5xl text-[#dee3ee]">Let’s Build Something Amazing Together.</h1>
                <p className="text-[#dee3ee] max-w-150">Have a question or an exciting project in mind? I’d love to hear from you. Let’s create user experiences that make a difference.</p>
           </div>
           <button className="bg-neutral-200 p-2"><Link href={'/contact'}>Contact</Link></button>
       </div>
    </div>
  );
}