"use client";

import { useEffect, useState } from "react";
import {
    User,
    Home,
    FileText,
    PencilRuler,
    LayoutGrid,
    Settings,
    MessageSquareText,
} from "lucide-react";
import { scrollToSection } from "@/utils/scroll";

const sections = [
    { id: "hero", icon: Home },
    { id: "about", icon: User },
    { id: "resume", icon: FileText },
    { id: "skill", icon: PencilRuler },
    { id: "portfolio", icon: LayoutGrid },
    { id: "service", icon: Settings },
    { id: "contact", icon: MessageSquareText },
];

export default function SectionIndicator() {
    const [active, setActive] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            const container = document.getElementById("scroll-container");
            const style = container ? getComputedStyle(container) : null;
            const isDesktop =
                style?.overflowY === "auto" || style?.overflowY === "scroll";

            let current = "hero";
            sections.forEach((section) => {
                const el = document.getElementById(section.id);
                if (!el) return;

                const rect = el.getBoundingClientRect();

                if (isDesktop && container) {
                    const containerTop = container.getBoundingClientRect().top;
                    if (rect.top - containerTop <= container.clientHeight / 2) {
                        current = section.id;
                    }
                } else {
                    if (rect.top <= window.innerHeight / 2) {
                        current = section.id;
                    }
                }
            });

            setActive(current);
        };

        const container = document.getElementById("scroll-container");
        container?.addEventListener("scroll", handleScroll);
        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            container?.removeEventListener("scroll", handleScroll);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {/* Desktop */}
            <div className="hidden lg:flex fixed right-6 xl:right-10 top-1/2 -translate-y-1/2 z-50">
                <div className="flex flex-col gap-1 px-2 py-3 rounded-full
                    bg-white
                    border border-sky-200/60
                    shadow-[0_4px_24px_rgba(14,165,233,0.12),inset_0_1px_0_rgba(255,255,255,0.9)]">

                    {sections.map(({ id, icon: Icon }) => (
                        <button
                            key={id}
                            onClick={() => scrollToSection(id)}
                            title={id.charAt(0).toUpperCase() + id.slice(1)}
                            className="relative flex items-center justify-center w-9 h-9 group"
                        >
                            {active === id && (
                                <span className="absolute inset-0 rounded-full
                                    bg-gradient-to-br from-sky-400/20 to-blue-400/20
                                    ring-1 ring-sky-300/50
                                    shadow-[0_2px_8px_rgba(14,165,233,0.2)]
                                    transition-all duration-300" />
                            )}
                            <Icon
                                size={15}
                                className={`relative z-10 transition-all duration-200 ${active === id
                                    ? "text-sky-600 drop-shadow-[0_1px_4px_rgba(14,165,233,0.4)]"
                                    : "text-slate-400 group-hover:text-sky-500 group-hover:scale-110"
                                    }`}
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* Mobile */}
            <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
                <div className="flex gap-1 px-3 py-2 rounded-full
                    bg-white
                    border border-sky-200/60
                    shadow-[0_4px_24px_rgba(14,165,233,0.15),inset_0_1px_0_rgba(255,255,255,0.9)]">

                    {sections.map(({ id, icon: Icon }) => (
                        <button
                            key={id}
                            onClick={() => scrollToSection(id)}
                            className="relative flex items-center justify-center w-9 h-9"
                        >
                            {active === id && (
                                <span className="absolute inset-0 rounded-full
                                    bg-gradient-to-br from-sky-400/20 to-blue-400/20
                                    ring-1 ring-sky-300/50" />
                            )}
                            <Icon
                                size={15}
                                className={`relative z-10 transition-all duration-200 ${active === id ? "text-sky-600" : "text-slate-400"
                                    }`}
                            />
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}