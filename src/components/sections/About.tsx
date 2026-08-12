import { User, Download } from "lucide-react";
import Badge from "../ui/Badge";

export default function About({ dict }: { dict: any }) {
  const startYear = 2022;
  const experienceYears = new Date().getFullYear() - startYear;

  return (
    <section
      id="about"
      className="flex flex-col justify-center pb-24 -mt-32 md:mt-0"
    >
      {/* Badge */}
      <Badge name={dict.badge} icon={User} />

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-slate-800">
        {dict.heading.part1}
        <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
          {dict.heading.part2}
        </span>
      </h2>

      {/* Content */}
      <p className="mt-6 text-lg text-slate-500 leading-relaxed">
        {dict.content1}
      </p>

      <p className="mt-3 text-slate-400 leading-relaxed">
        {dict.content2}
      </p>

      {/* Stats */}
      <div className="mt-10 flex gap-4 md:gap-6 md:flex-wrap flex-wrap items-center">

        <div className="flex-1 md:flex-none px-4 md:px-6 py-5 rounded-2xl
          bg-white/70 backdrop-blur-sm
          border border-sky-100/80
          shadow-[0_4px_20px_rgba(14,165,233,0.08)]
          flex flex-col items-center md:min-w-[120px]">
          <h3 className="text-3xl font-bold
            bg-gradient-to-br from-sky-500 to-blue-600
            bg-clip-text text-transparent">
            {experienceYears}+
          </h3>
          <p className="text-xs text-slate-400 mt-1.5 text-center font-medium tracking-wide uppercase">
            {dict.stats.experience}
          </p>
        </div>

        <div className="flex-1 md:flex-none px-4 md:px-6 py-5 rounded-2xl
          bg-white/70 backdrop-blur-sm
          border border-sky-100/80
          shadow-[0_4px_20px_rgba(14,165,233,0.08)]
          flex flex-col items-center md:min-w-[120px]">
          <h3 className="text-3xl font-bold
            bg-gradient-to-br from-sky-500 to-blue-600
            bg-clip-text text-transparent">
            15+
          </h3>
          <p className="text-xs text-slate-400 mt-1.5 text-center font-medium tracking-wide uppercase">
            {dict.stats.projects}
          </p>
        </div>

        {/* Download CV Button */}
        <a
          href="/CV_Gayuh_Widyanata.pdf"
          download
          className="w-full md:w-auto mt-2 md:mt-0 md:ml-auto inline-flex justify-center items-center gap-2 px-6 py-4 
            border border-transparent text-white 
            bg-blue-600 rounded-2xl font-medium
            transition-all duration-200
            hover:bg-blue-700 hover:shadow-[0_8px_25px_rgba(37,99,235,0.25)]
            active:bg-blue-800
            cursor-pointer"
        >
          {dict.downloadCV}
          <Download size={20} />
        </a>

      </div>
    </section>
  );
}