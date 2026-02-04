import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
    return (
        <Link href="/" className="group flex items-center">
            <div className="relative h-10 w-auto flex-shrink-0">
                <Image
                    src="https://i.ibb.co.com/WpzrbS86/Chat-GPT-Image-Feb-3-2026-08-59-22-AM.png"
                    alt="Muhtasim Billah"
                    width={70}
                    height={40}
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    priority
                />
            </div>
        </Link>
    );
};
