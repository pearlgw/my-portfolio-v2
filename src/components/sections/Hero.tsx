"use client";
import { Home } from "lucide-react";
import Badge from "../ui/Badge";
import { scrollToSection } from "@/utils/scroll";

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen">
            {/* Badge (floating top di desktop, flow normal di mobile) */}
            <div className="hidden lg:block absolute top-10 left-0">
                <Badge name="Introduce" icon={Home} />
            </div>

            {/* Center Content */}
            <div className="h-full flex flex-col justify-center">

                {/* Badge mobile (ikut flow, tepat di atas heading) */}
                <div className="lg:hidden -mt-40">
                    <Badge name="Introduce" icon={Home} />
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-semibold leading-tight md:max-w-4xl">
                    Say Hi from a{" "}
                    <span className="text-blue-600">
                        Backend & Fullstack Developer
                    </span>
                </h1>

                {/* Sub Heading */}
                <p className="mt-5 text-lg text-gray-600 md:max-w-3xl leading-relaxed">
                    I build systems and web applications that are simple, efficient,
                    and reliable. Turning ideas into real solutions is what I enjoy most.
                </p>

                {/* Extra */}
                <p className="mt-3 text-gray-500 md:max-w-3xl">
                    Focused on creating products that not only work, but also scale
                    and make an impact.
                </p>

                {/* CTA */}
                <div className="mt-8">
                    <button
                        onClick={() => scrollToSection("portfolio")}
                        className="inline-block px-6 py-3 
                            border border-blue-600 text-blue-600 
                            bg-transparent rounded-xl 
                            transition-all duration-200
                            hover:bg-blue-600 hover:text-white
                            active:bg-blue-700 active:border-blue-700
                            cursor-pointer"
                    >
                        View My Projects
                    </button>
                </div>
            </div>
        </section>
    );
}