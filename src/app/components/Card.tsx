
import Image from "next/image";

interface CardProps {
    image: string;
}

export default function Card ({image} : CardProps) {
  return (
    <div className="relative h-[60px] min-w-[60px] flex items-center justify-center">
      <Image src={image} fill style={{objectFit: 'contain'}} alt=""/>
    </div>
  );
}