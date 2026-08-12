"use client";
import { Home, Download } from "lucide-react";
import Badge from "../ui/Badge";
import { scrollToSection } from "@/utils/scroll";

export default function Hero({ dict }: { dict: any }) {
    return (
        <section id="hero" className="relative h-screen">
            {/* Badge (floating top di desktop, flow normal di mobile) */}
            <div className="hidden lg:block absolute top-10 left-0">
                <Badge name={dict.badge} icon={Home} />
            </div>

            {/* Center Content */}
            <div className="h-full flex flex-col justify-center">

                {/* Badge mobile (ikut flow, tepat di atas heading) */}
                <div className="lg:hidden -mt-40">
                    <Badge name={dict.badge} icon={Home} />
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-semibold leading-tight md:max-w-4xl">
                    {dict.heading.part1}
                    <span className="text-blue-600">
                        {dict.heading.part2} <span className="text-slate-800">{dict.heading.part3}</span>{dict.heading.part4}
                    </span>
                </h1>

                {/* Sub Heading */}
                <p className="mt-5 text-lg text-gray-600 md:max-w-3xl leading-relaxed">
                    {dict.subHeading}
                </p>

                {/* Extra */}
                <p className="mt-3 text-gray-500 md:max-w-3xl">
                    {dict.extra}
                </p>

                {/* CTA */}
                <div className="mt-8 flex flex-wrap gap-4">
                    <button
                        onClick={() => scrollToSection("portfolio")}
                        className="inline-block px-6 py-3 
                            border border-blue-600 text-blue-600 
                            bg-transparent rounded-xl font-medium
                            transition-all duration-200
                            hover:bg-blue-600 hover:text-white
                            active:bg-blue-700 active:border-blue-700
                            cursor-pointer"
                    >
                        {dict.cta}
                    </button>
                    
                    <a
                        href="/CV_Gayuh_Widyanata.pdf"
                        download
                        className="inline-flex items-center gap-2 px-6 py-3 
                            border border-transparent text-white 
                            bg-blue-600 rounded-xl font-medium
                            transition-all duration-200
                            hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20
                            active:bg-blue-800
                            cursor-pointer"
                    >
                        {dict.downloadCV}
                        <Download size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
}