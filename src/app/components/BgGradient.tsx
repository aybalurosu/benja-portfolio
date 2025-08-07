import "./../css/bg_anim.css";

export default function BgGradient() {
  return (
    <div>
        <span className="absolute inset-0 left-0 gradient rounded-full sm:w-[100px] md:w-[900px] lg:w-[900px] h-[800px] css-blurry-gradient1"></span>
        <span className="absolute lg:left-100 inset-0 gradient rounded-full sm:w-[100px] md:w-[700px] lg:w-[700px] h-[500px] css-blurry-gradient2"></span>
    </div>
  );
}