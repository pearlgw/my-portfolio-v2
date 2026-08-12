"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    // pathname format is /en or /id or /en/something
    const newLang = currentLang === "en" ? "id" : "en";
    
    // Replace the language segment in the pathname
    const newPathname = pathname.replace(`/${currentLang}`, `/${newLang}`);
    
    router.push(newPathname);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center w-16 h-8 rounded-full bg-slate-200/50 backdrop-blur-sm border border-slate-300 shadow-inner p-1 transition-all duration-300 focus:outline-none"
      aria-label="Toggle language"
    >
      <div
        className={`absolute w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300 ${
          currentLang === "en" ? "translate-x-0" : "translate-x-8"
        }`}
      >
        <span className="text-[10px] font-bold text-sky-600">
          {currentLang === "en" ? "EN" : "IN"}
        </span>
      </div>
      <div className="w-full flex justify-between px-1.5 z-0 text-[10px] font-bold text-slate-400">
        <span>EN</span>
        <span>IN</span>
      </div>
    </button>
  );
}
