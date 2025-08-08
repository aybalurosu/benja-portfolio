import { Montserrat, Roboto, Noto_Sans } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300'] });
const notoSans = Noto_Sans({ subsets: ['latin'], weight: ['300'] });

export default function Navbar() {
  return (
    <nav className="flex items-center justify-around sticky top-0 left-0 right-0 z-50 p-5">
      <Image src={'/landing/logo.png'} width={150} height={20} alt=""/>
      <ul className="flex items-center justify-center gap-7 p-4 bg-transparent text-gray-400">
        <li><a href="#about" className={`${notoSans.className} hover:text-[#cbe3fd] transition-all`}>About</a></li>
        <li><a href="#projects" className={`${notoSans.className} hover:text-[#cbe3fd] transition-all`}>Projects</a></li>
        <li><a href="#experience" className={`${notoSans.className} hover:text-[#cbe3fd] transition-all`}>Experience</a></li>
        <li><a href="#contact" className={`${notoSans.className} hover:text-[#cbe3fd] transition-all`}>Contact</a></li>
      </ul>
    </nav>
  );
}