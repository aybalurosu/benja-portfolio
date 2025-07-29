
export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="text-start text-[#c0c3c8] flex flex-col items-center w-full relative z-10">
                <p className="text-sm mb-4">© {currentYear} Benjamin Porras Gómez. All rights reserved.</p>
            </div>
        </footer>
    )
}