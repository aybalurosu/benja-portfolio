import { Montserrat } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300'] });

export default function Navbar() {
  return (
    <nav className="flex items-center justify-around sticky top-0 left-0 right-0 z-50 p-5">
      <Image src={'/landing/logo.png'} width={150} height={20} alt=""/>
      <ul className="flex items-center justify-center gap-7 p-4 bg-transparent text-gray-500">
        <li><a href="#about" className={`${montserrat} hover:text-[#cbe3fd] transition-all text-lg`}>About</a></li>
        <li><a href="#projects" className={`${montserrat} hover:text-[#cbe3fd] transition-all text-lg`}>Projects</a></li>
        <li><a href="#experience" className={`${montserrat} hover:text-[#cbe3fd] transition-all text-lg`}>Experience</a></li>
        <li><a href="#contact" className={`${montserrat} hover:text-[#cbe3fd] transition-all text-lg`}>Contact</a></li>
      </ul>
    </nav>
  );
}