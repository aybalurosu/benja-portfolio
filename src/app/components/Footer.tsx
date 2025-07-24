
export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="text-center text-white flex flex-col items-center justify-center p-5 w-full relative z-10">
                <p className="text-lg mb-4">© {currentYear} Benjamin Porras Gómez. All rights reserved.</p>
            </div>
        </footer>
    )
}