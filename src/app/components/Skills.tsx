import Image from "next/image";
import "./../css/skills.css";

export default function Skills () {
    return (
        <section id="skills" className="min-h-screen flex flex-col items-center justify-center relative z-10">
            <div className="flex flex-col items-center">
                <h1 className="text-8xl font-medium mb-4 text-center text-[#B5C0CC]">Skills</h1>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-8 sm:max-w-[80%] lg:max-w-[30%]">
                <div className="p-2 text-[#c0eaf8]">
                    <Image src={'/icons/terraform.png'} width={70} height={100} alt=""></Image>
                </div>
                <div className="p-2 text-[#c0eaf8]">
                    <Image src={'/icons/ansible.png'} width={70} height={100} alt=""></Image>
                </div>
                <div className="p-2 text-[#c0eaf8]">
                    <Image src={'/icons/docker.png'} width={80} height={100} alt=""></Image>
                </div>
                <div className="p-2 text-[#c0eaf8]">
                    <Image src={'/icons/kubernetes.png'} width={70} height={100} alt=""></Image>
                </div>
                <div className="p-2 text-[#c0eaf8]">
                    <Image src={'/icons/linux.png'} width={70} height={100} alt=""></Image>
                </div>
                <div className="p-2 text-[#c0eaf8]">
                    <Image src={'/icons/php.png'} width={70} height={100} alt=""></Image>
                </div>
                <div className="p-2 text-[#c0eaf8]">
                    <Image src={'/icons/python.png'} width={70} height={100} alt=""></Image>
                </div>
                <div className="p-2 text-[#c0eaf8]">
                    <Image src={'/icons/proxmox.png'} width={70} height={100} alt=""></Image>
                </div>
            </div>
        </section>
    );
}