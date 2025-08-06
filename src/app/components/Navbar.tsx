
export default function Navbar() {
  return (
    <nav className="flex items-center justify-around sticky top-0 left-0 right-0 z-50 p-5">
      <div className="text-white text-3xl">LOGO</div>
      <ul className="flex items-center justify-center gap-7 p-4 bg-transparent text-gray-400">
        <li><a href="#about" className="hover:text-[#e2ecff] transition-all text-lg">About</a></li>
        <li><a href="#projects" className="hover:text-[#e2ecff] transition-all text-lg">Projects</a></li>
        <li><a href="#experience" className="hover:text-[#e2ecff] transition-all text-lg">Experience</a></li>
        <li><a href="#contact" className="hover:text-[#e2ecff] text-lg">Contact</a></li>
      </ul>
    </nav>
  );
}