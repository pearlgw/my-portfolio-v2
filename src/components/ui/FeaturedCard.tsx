import Link from "next/link";
import Image from "next/image";

type FeaturedItemProps = {
    title: string;
    image: string;
    href: string;
};

export default function FeaturedItem({
    title,
    image,
    href,
}: FeaturedItemProps) {
    return (
        <Link href={href} target="_blank" className="group block">

            {/* TITLE */}
            <p className="text-sm font-medium text-slate-700 mb-3
        group-hover:text-sky-600 transition-colors">
                {title}
            </p>

            {/* IMAGE */}
            <div className="relative h-56 md:h-[45vh] overflow-hidden rounded-xl">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover
          group-hover:scale-105 transition-transform duration-300"
                />

                {/* overlay hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
            </div>

        </Link>
    );
}