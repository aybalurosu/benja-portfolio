import { Montserrat, Roboto_Condensed } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['500'] });
const robotoCondensed = Roboto_Condensed({ subsets: ['latin'], weight: ['400'] });

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            
            <div className="text-start flex flex-col items-center w-full relative z-10">
                <p className={`${robotoCondensed.className} text-sm mb-4 text-[#b4c0c4]`}>© {currentYear} Benjamin Porras Gómez. All rights reserved.</p>
            </div>
        </footer>
    )
}