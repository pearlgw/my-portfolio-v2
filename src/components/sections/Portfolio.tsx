import { LayoutGrid, ExternalLink } from "lucide-react";
import Badge from "../ui/Badge";
import Link from "next/link";
import Image from "next/image";
import FeaturedIn from "./Featured-In";
import { FaReact, FaLaravel, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiExpress, SiPostgresql, SiTypescript, SiFastapi, SiDocker, SiLaravel, SiPhp, SiPython } from "react-icons/si";
import { DiRedis } from "react-icons/di";

const portfolios = [
  {
    id: 1,
    image: "/02f163c5-eb1f-4047-b039-103f7ef9b4d9_new.png",
    href: "https://radar-dev.farmagitechs.co.id/",
    role: "Backend Developer",
    tech: [FaNodeJs, SiExpress, SiTypescript, SiPostgresql, DiRedis, SiDocker],
  },
  {
    id: 2,
    image: "/6ba0cf8e-b972-41ac-b309-96a91af921ca_new.png",
    href: "http://ai-assistance.farmagitechs.co.id/",
    role: "Fullstack Developer",
    tech: [FaReact, SiTailwindcss, SiPostgresql, SiFastapi, SiDocker],
  },
  {
    id: 3,
    image: "/f0bd6ff4-8b21-4580-9a3f-ead881ce56df_new.png",
    href: "https://kksoegijapranata.org/",
    role: "Fullstack Developer",
    tech: [SiPhp, FaLaravel, SiTailwindcss, SiMysql],
  },
  {
    id: 4,
    image: "/a90e7c03-da33-4559-bab7-0870ef42e9b7_new.png",
    href: "https://swor.natagw.my.id/",
    role: "Fullstack Developer",
    tech: [SiPhp, SiLaravel, SiTailwindcss, SiMysql],
  },
  {
    id: 5,
    image: "/c992925d-1435-4c66-bbb1-0fc950d94a70_new.png",
    href: "https://bengkelkoding.dinus.id/",
    role: "Backend Developer",
    tech: [SiPhp, FaLaravel, SiMysql],
  },
  {
    id: 6,
    image: "/d841bdd9-6d5e-42f2-910d-a41bd600eb23_new.png",
    href: "https://histori-indoor-duration.natagw.my.id/",
    role: "Backend Developer",
    tech: [SiPython, SiFastapi, SiMysql, SiDocker],
  },
];

export default function Portfolio() {
  return (
    <>
      <section id="portfolio" className="flex flex-col justify-center pb-16 md:pb-24">
        <Badge name="Portfolio" icon={LayoutGrid} />

        <h2 className="mt-4 text-xl md:text-4xl font-extralight leading-tight text-slate-700">
          Featured{" "}
          <span className="font-semibold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
            Portfolio
          </span>
        </h2>

        {/* CONTENT */}
        <div className="mt-10 flex flex-col gap-5">
          {portfolios.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl w-full block
                ring-1 ring-sky-100/80
                shadow-[0_4px_20px_rgba(14,165,233,0.08)]
                hover:ring-sky-300/60
                hover:shadow-[0_8px_32px_rgba(14,165,233,0.18)]
                transition-all duration-500"
            >
              {/* IMAGE
                  Mobile  : 45vh  — separuh layar HP
                  Desktop : 75vh  — mengisi 75% tinggi layar (proporsional di 80% maupun 100% zoom)
              */}
              <div className="relative w-full h-[45vh] md:h-[75vh]">
                <Image
                  src={item.image}
                  alt="portfolio"
                  fill
                  className="object-cover transition-transform duration-700"
                />
              </div>

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0
                bg-gradient-to-t from-slate-900/85 via-sky-950/40 to-transparent
                opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition duration-500">

                  {/* ROLE badge */}
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium
                    bg-sky-400/20 backdrop-blur-sm border border-sky-300/30 text-sky-200
                    mb-3 opacity-0 group-hover:opacity-100 transition duration-500">
                    {item.role}
                  </span>

                  {/* BOTTOM ROW */}
                  <div className="flex items-center justify-between
                    opacity-0 group-hover:opacity-100 transition duration-500">

                    {/* TECH STACK */}
                    <div className="flex gap-2">
                      {item.tech.map((Icon, index) => (
                        <div
                          key={index}
                          className="bg-white/10 backdrop-blur-md p-2 rounded-xl
                            border border-white/15
                            hover:bg-white/20 hover:border-sky-300/30
                            transition-all duration-200"
                        >
                          <Icon className="text-white text-base" />
                        </div>
                      ))}
                    </div>

                    {/* EXTERNAL LINK ICON */}
                    <div className="p-2 rounded-xl bg-sky-400/20 backdrop-blur-sm border border-sky-300/30">
                      <ExternalLink size={15} className="text-sky-200" />
                    </div>

                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <FeaturedIn />
    </>
  );
}