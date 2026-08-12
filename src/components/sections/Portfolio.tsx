"use client";

import { useState, useMemo } from "react";
import { LayoutGrid, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import Badge from "../ui/Badge";
import Link from "next/link";
import Image from "next/image";
import FeaturedIn from "./Featured-In";
import { FaReact, FaLaravel, FaNodeJs, FaServer, FaTelegram, FaCogs, FaLock } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiExpress, SiPostgresql, SiTypescript, SiFastapi, SiDocker, SiLaravel, SiPhp, SiPython, SiBootstrap, SiNextdotjs, SiN8N, SiGooglesheets } from "react-icons/si";
import { DiRedis } from "react-icons/di";

const portfolios = [
  {
    id: 1,
    title: "Template ATS",
    image: "/1ae47d85-d07e-4d5c-8b4c-59a0ca342ad0.png",
    href: "https://template-ats.natagw.my.id/",
    role: "Fullstack Developer",
    tech: [SiNextdotjs, FaServer],
  },
  {
    id: 2,
    title: "DICOM Log Automation",
    image: "/03d815cd-9f2e-4556-ac85-03149b6d3537.png",
    href: "",
    role: "Automation Log DICOM",
    tech: [SiPython, SiDocker, FaTelegram, SiGooglesheets],
  },
  {
    id: 3,
    title: "Monitoring Osteobike",
    image: "/6849423c-0494-4101-90ed-2ed3d5609df7.png",
    href: "https://monitoring-osteobike.my.id/",
    role: "Fullstack Developer",
    tech: [SiLaravel, SiMysql, SiTailwindcss, FaServer],
  },
  {
    id: 4,
    title: "Assistant Pribadi Bot",
    image: "/a87d93fd-d747-4081-bbd9-b9e0008034cb.png",
    href: "",
    role: "Assistant Pribadi",
    tech: [SiN8N, FaTelegram, SiGooglesheets, FaCogs],
  },
  {
    id: 5,
    title: "Radar Dev",
    image: "/02f163c5-eb1f-4047-b039-103f7ef9b4d9_new.png",
    href: "https://radar-dev.farmagitechs.co.id/",
    role: "Backend Developer",
    tech: [FaNodeJs, SiExpress, SiTypescript, SiPostgresql, DiRedis, SiDocker],
  },
  {
    id: 6,
    title: "AI Assistance",
    image: "/6ba0cf8e-b972-41ac-b309-96a91af921ca_new.png",
    href: "http://ai-assistance.farmagitechs.co.id/",
    role: "Fullstack Developer",
    tech: [FaReact, SiTailwindcss, SiPostgresql, SiFastapi, SiDocker],
  },
  {
    id: 7,
    title: "KK Soegijapranata",
    image: "/f0bd6ff4-8b21-4580-9a3f-ead881ce56df_new.png",
    href: "https://kksoegijapranata.org/",
    role: "Fullstack Developer",
    tech: [SiPhp, FaLaravel, SiTailwindcss, SiMysql],
  },
  {
    id: 8,
    title: "SWOR App",
    image: "/a90e7c03-da33-4559-bab7-0870ef42e9b7_new.png",
    href: "https://swor.natagw.my.id/",
    role: "Fullstack Developer",
    tech: [SiPhp, SiLaravel, SiTailwindcss, SiMysql],
  },
  {
    id: 9,
    title: "Bengkel Koding",
    image: "/c992925d-1435-4c66-bbb1-0fc950d94a70_new.png",
    href: "https://bengkelkoding.dinus.id/",
    role: "Backend Developer",
    tech: [SiPhp, FaLaravel, SiMysql],
  },
  {
    id: 10,
    title: "Poliklinik",
    image: "/4348c654-f946-4001-8b45-5c817ea720fa.png",
    href: "https://poliklinik.natagw.my.id/",
    role: "Fullstack Developer",
    tech: [SiLaravel, SiTailwindcss, SiMysql],
  },
  {
    id: 11,
    title: "Pantau Sampah",
    image: "/76284da3-2410-400b-bb3d-d697f5205e33.png",
    href: "http://pantau-sampah.iteba.ac.id/",
    role: "Fullstack Developer",
    tech: [SiFastapi, SiMysql, SiNextdotjs, FaServer],
  },
  {
    id: 12,
    title: "Histori Indoor Duration",
    image: "/d841bdd9-6d5e-42f2-910d-a41bd600eb23_new.png",
    href: "https://histori-indoor-duration.natagw.my.id/",
    role: "Backend Developer",
    tech: [SiPython, SiFastapi, SiMysql, SiDocker],
  },
  {
    id: 13,
    title: "Digital Platform Reseller",
    image: "/cfbc5144-3389-4308-925c-6604695d65b1.png",
    href: "https://digitalplatformreseller.natagw.my.id/",
    role: "Fullstack Developer",
    tech: [SiLaravel, SiMysql, SiTailwindcss, FaServer],
  },
  {
    id: 14,
    title: "Room Story",
    image: "/bdb0f0a9-dc33-4ac4-9508-b07f49c5374b.png",
    href: "https://room-story.natagw.my.id/",
    role: "Fullstack Developer",
    tech: [SiNextdotjs, SiMysql, FaLock],
  },
  {
    id: 15,
    title: "Art Gallery",
    image: "/3fb55c7f-05c0-427d-bef0-31189997020b.png",
    href: "https://art-gallery.natagw.my.id/",
    role: "Fullstack Developer",
    tech: [SiLaravel, SiMysql, SiTailwindcss],
  },
  {
    id: 16,
    title: "Travel GW",
    image: "/bddd29c4-0422-4def-bbdc-164da1f63969.png",
    href: "https://github.com/pearlgw/travelGW.git",
    role: "Fullstack Developer",
    tech: [SiLaravel, SiMysql, SiTailwindcss],
  },
  {
    id: 17,
    title: "Layanan bAdAgo",
    image: "/eba75d16-6d34-4a09-a1cc-6d57bea8db8e.png",
    href: "https://github.com/pearlgw/layanan-bAdAgo.git",
    role: "Backend Developer",
    tech: [SiLaravel, SiMysql, SiTailwindcss],
  },
  {
    id: 18,
    title: "Antrian Wash",
    image: "/8c152660-eafb-47d2-a656-af318e82233f.png",
    href: "https://github.com/pearlgw/si_cepkin_web_antrian_wash.git",
    role: "Fullstack Developer",
    tech: [SiLaravel, SiMysql, SiBootstrap],
  },
  {
    id: 19,
    title: "Evote Kripto",
    image: "/82405682-2723-4987-b416-0196aa667776.png",
    href: "https://github.com/pearlgw/Evote_Kripto.git",
    role: "Fullstack Developer",
    tech: [SiLaravel, SiMysql, SiBootstrap],
  },
];

const categories = ["All", "Backend Developer", "Fullstack Developer", "Automation"];
const ITEMS_PER_PAGE = 4;

export default function Portfolio({ dict, featured }: { dict: any, featured: any }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Filter projects based on active category
  const filteredPortfolios = useMemo(() => {
    if (activeCategory === "All") return portfolios;
    if (activeCategory === "Automation") {
      return portfolios.filter((p) => p.role === "Assistant Pribadi" || p.role === "Automation Log DICOM");
    }
    return portfolios.filter((p) => p.role === activeCategory);
  }, [activeCategory]);

  // Handle visible projects for pagination
  const visiblePortfolios = filteredPortfolios.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPortfolios.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const handleShowLess = () => {
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(ITEMS_PER_PAGE); // Reset pagination when category changes
  };

  const getCategoryLabel = (cat: string) => {
    if (cat === "All") return dict.filters?.all || "All";
    if (cat === "Backend Developer") return dict.filters?.backend || "Backend Developer";
    if (cat === "Fullstack Developer") return dict.filters?.fullstack || "Fullstack Developer";
    return cat;
  };

  return (
    <>
      <section id="portfolio" className="flex flex-col justify-center pb-16 md:pb-24">
        <Badge name={dict.badge} icon={LayoutGrid} />

        <h2 className="mt-4 text-xl md:text-4xl font-extralight leading-tight text-slate-700">
          {dict.heading.part1}
          <span className="font-semibold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
            {dict.heading.part2}
          </span>
        </h2>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap gap-2 md:gap-3 mt-8 mb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-5 py-2.5 rounded-full text-[13px] md:text-sm font-semibold transition-all duration-300 border 
                ${activeCategory === category
                  ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-white border-transparent shadow-[0_4px_20px_rgba(14,165,233,0.35)]"
                  : "bg-white/70 text-slate-500 border-white/60 hover:bg-white hover:text-sky-600 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(14,165,233,0.1)]"
                }`}
            >
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>

        {/* CONTENT GRID */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {visiblePortfolios.map((item) => (
            <Link
              key={item.id}
              href={item.href || "#"}
              onClick={(e) => {
                if (!item.href) {
                  e.preventDefault();
                }
              }}
              target={item.href ? "_blank" : undefined}
              rel={item.href ? "noopener noreferrer" : undefined}
              className="group relative overflow-hidden rounded-3xl w-full block
                bg-white/40 backdrop-blur-md border border-white/60
                shadow-[0_8px_32px_rgba(14,165,233,0.05)]
                hover:border-sky-200/80
                hover:shadow-[0_12px_40px_rgba(14,165,233,0.15)]
                transition-all duration-500"
            >
              {/* IMAGE: using taller dynamic heights for better content fit */}
              <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] bg-sky-50/50">
                <Image
                  src={item.image}
                  alt="portfolio"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0
                bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-slate-900/80
                opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6 z-10">
                
                {/* TOP ROW (TITLE) */}
                <div className="transform -translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500 flex-shrink-0">
                  <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-md">
                    {item.title}
                  </h3>
                </div>

                {/* BOTTOM ROW (ROLE & TECH) */}
                <div className="transform translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500 flex-shrink-0 mt-auto">

                  {/* ROLE badge */}
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold
                    bg-sky-500/20 backdrop-blur-md border border-sky-400/30 text-sky-100
                    mb-3">
                    {item.role}
                  </span>

                  {/* BOTTOM ROW (ICONS & LINK) */}
                  <div className="flex items-end justify-between gap-2">

                    {/* TECH STACK */}
                    <div className="flex gap-2 flex-wrap">
                      {item.tech.map((Icon, index) => (
                        <div
                          key={index}
                          className="bg-white/10 backdrop-blur-md p-2 rounded-xl
                            border border-white/10
                            hover:bg-white/20 hover:border-sky-300/40
                            transition-all duration-200"
                        >
                          <Icon className="text-white text-sm md:text-lg" />
                        </div>
                      ))}
                    </div>

                    {/* EXTERNAL LINK ICON */}
                    {item.href && (
                      <div className="p-2.5 rounded-xl bg-sky-500/20 backdrop-blur-md border border-sky-400/30 group-hover:bg-sky-500/40 transition-colors flex-shrink-0">
                        <ExternalLink size={16} className="text-white" />
                      </div>
                    )}

                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* PAGINATION BUTTONS */}
        {filteredPortfolios.length > ITEMS_PER_PAGE && (
          <div className="mt-12 flex justify-center">
            {hasMore ? (
              <button
                onClick={handleShowMore}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-sky-600 bg-white/70 border border-sky-200/60 hover:bg-sky-50 hover:border-sky-300 hover:shadow-[0_4px_24px_rgba(14,165,233,0.15)] backdrop-blur-md transition-all duration-300"
              >
                {dict.showMore || "Show More"} <ChevronDown size={16} />
              </button>
            ) : (
              <button
                onClick={handleShowLess}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-slate-500 bg-white/70 border border-slate-200/60 hover:bg-slate-50 hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)] backdrop-blur-md transition-all duration-300"
              >
                {dict.showLess || "Show Less"} <ChevronUp size={16} />
              </button>
            )}
          </div>
        )}
      </section>
      
      <FeaturedIn dict={featured} />
    </>
  );
}