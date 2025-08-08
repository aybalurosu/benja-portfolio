
import Image from "next/image";
import "./../css/contact.css";
import { Montserrat, Roboto_Condensed } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['500'] });
const robotoCondensed = Roboto_Condensed({ subsets: ['latin'], weight: ['400'] });

export default function Contact() {

  return (
    <div id="contact" className="min-h-screen min-w-screen relative z-10 flex flex-col items-center justify-center">
       <div className="contact-box rounded-xl p-10 flex flex-col items-center justify-center gap-7 
       shadow-sm shadow-[#b9d4d8] border-1 border-[#9acccc00">
           <div className="w-[60%] text-center flex flex-col items-center justify-center gap-5">
                <div className="bg-[#04070e9b] border-1 border-[#c4dddf27] p-2 pt-1 pb-1 rounded-lg"><h1 className={`${robotoCondensed.className} text-[#d5f3f5]`}>LET'S TALK</h1></div>
                <h1 className={`${montserrat.className} text-5xl text-[#eff2f6]`}>Let’s Build Something Amazing Together.</h1>
                <p className={`${robotoCondensed.className} text-[#d0e8f5] max-w-100`}>Have a question or an exciting project in mind? I’d love to hear from you. Let’s create user experiences that make a difference.</p>
           </div>
           <div className="bg-[#04070e8b] p-5 flex sm:flex-col md:flex-row lg:flex-row items-center gap-10 rounded-4xl">
              <div className="inline-flex gap-2">
                <Image src={'/contact/email.svg'} alt="" width={20} height={20}/>
                <p className={`${robotoCondensed.className} text-[#e4edefd5] text-sm`}>benjaminporrasgomez@gmail.com</p>
              </div>
              <div className="inline-flex gap-2">
                <Image src={'/contact/phone.svg'} alt="" width={20} height={20}/>
                <p className={`${robotoCondensed.className} text-[#e4edefd5] text-sm`}>611475536</p>
              </div>
              <a href="/"><Image src={'/contact/linkedIn.svg'} alt="" width={25} height={20}/></a>
           </div>
       </div>
    </div>
  );
}