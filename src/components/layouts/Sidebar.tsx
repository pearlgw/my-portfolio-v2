"use client";
import Image from "next/image";
import { Mail, MapPin, Linkedin, Github, Instagram } from "lucide-react";
import { scrollToSection } from "@/utils/scroll";

export default function Sidebar() {
    const year = new Date().getFullYear();
    const socials = [
        {
            icon: Linkedin,
            url: "https://www.linkedin.com/in/gayuh-widyanata",
        },
        {
            icon: Instagram,
            url: "https://www.instagram.com/natagw.cpp",
        },
        {
            icon: Github,
            url: "https://github.com/pearlgw",
        },
    ];

    return (
        <div className="h-full flex items-center justify-center mt-3 md:mt-0">
            <div className="w-[360px] h-[640px] rounded-[32px] px-7 py-8 flex flex-col justify-between
        relative overflow-hidden
        bg-white/65 backdrop-blur-3xl
        border border-white/70
        shadow-[0_2px_0_rgba(255,255,255,0.9)_inset,0_-1px_0_rgba(125,211,252,0.3)_inset,0_16px_48px_rgba(96,165,250,0.18),0_4px_16px_rgba(96,165,250,0.10)]"
            >

                {/* Inner glow top — beri kesan cahaya masuk dari atas */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-32
          bg-gradient-to-b from-white/50 to-transparent rounded-t-[32px]" />

                {/* Ambient blob kiri bawah — echo dari mesh luar */}
                <div className="pointer-events-none absolute -bottom-8 -left-8 w-48 h-48
          rounded-full bg-sky-300/15 blur-3xl" />

                {/* Ambient blob kanan atas */}
                <div className="pointer-events-none absolute -top-6 -right-6 w-40 h-40
          rounded-full bg-indigo-200/20 blur-3xl" />

                {/* TOP */}
                <div className="relative z-10">
                    <div className="flex items-start justify-between">
                        <h1 className="text-3xl font-semibold tracking-tight leading-tight">
                            NataGW
                        </h1>
                        <p className="text-[13px] text-right leading-snug max-w-[140px] font-medium">
                            Software Engineer Backend Focus
                        </p>
                    </div>

                    <div className="mt-6 flex flex-col items-center">
                        <div className="w-60 h-60 rounded-2xl overflow-hidden
              ring-2 ring-white/80
              shadow-[0_4px_24px_rgba(96,165,250,0.22),0_1px_0_rgba(255,255,255,0.9)_inset]">
                            <Image
                                src="/natagw.png"
                                alt="profile"
                                width={208}
                                height={208}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        <h2 className="mt-3 text-base font-semibold text-slate-700 tracking-tight">
                            Gayuh Widyanata
                        </h2>

                        <span className="mt-1.5 inline-flex items-center gap-1.5 px-3 py-1
              rounded-full text-[11px] font-medium
              bg-emerald-50/80 text-emerald-600 border border-emerald-200/60
              backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Open to Work
                        </span>
                    </div>

                    <div className="mt-5 flex flex-col items-center gap-2 text-[13.5px] text-slate-500">
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-md bg-sky-50/80 border border-sky-100/80 backdrop-blur-sm">
                                <Mail size={13} className="text-sky-500" />
                            </div>
                            <span className="leading-none">gayuhnata02@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-md bg-sky-50/80 border border-sky-100/80 backdrop-blur-sm">
                                <MapPin size={13} className="text-sky-500" />
                            </div>
                            <span className="leading-none">Based in Yogyakarta, ID</span>
                        </div>
                    </div>

                    <div className="mt-5 flex justify-center gap-3">
                        {socials.map((item, i) => {
                            const Icon = item.icon;

                            return (
                                <a
                                    key={i}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-xl
        bg-white/60 border border-white/80
        shadow-[0_2px_8px_rgba(96,165,250,0.12)]
        text-slate-500 hover:text-sky-600
        hover:bg-sky-50/80 hover:border-sky-200/80
        hover:shadow-[0_4px_14px_rgba(14,165,233,0.2)]
        transition-all duration-200 cursor-pointer
        -mt-2 mb-2"
                                >
                                    <Icon size={17} />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="relative z-10">
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="w-full py-3 text-[14.5px] font-semibold rounded-xl
              bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500
              text-white tracking-wide
              shadow-[0_4px_20px_rgba(96,165,250,0.45),0_1px_0_rgba(255,255,255,0.25)_inset]
              hover:shadow-[0_6px_28px_rgba(96,165,250,0.6)]
              hover:brightness-105
              transition-all duration-200 cursor-pointer"
                    >
                        Work With Me
                    </button>

                    <p className="text-[11px] text-slate-400 text-center mt-3">
                        © {year} All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    );
}
