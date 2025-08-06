import "./../css/bg_anim.css";

export default function BgGradient() {
  return (
    <div>
        <span className="absolute inset-0 left-0 gradient rounded-full w-[900px] h-[800px] css-blurry-gradient1"></span>
        <span className="absolute left-100 inset-0 gradient rounded-full w-[700px] h-[500px] css-blurry-gradient2"></span>
    </div>
  );
}