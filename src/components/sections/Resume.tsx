import { FileText } from "lucide-react";
import Badge from "../ui/Badge";

export default function Resume() {
  return (
    <section id="resume" className="flex flex-col justify-center pb-24">
      <Badge name="Resume" icon={FileText} />

      {/* Experience */}
      <h2 className="mt-4 text-xl md:text-4xl font-light leading-tight text-slate-700">
        Experience
      </h2>

      <ol className="relative mt-10 border-s ms-1 border-sky-200/60">

        {/* Farmagitechs */}
        <li className="-mt-2 mb-10 ms-6">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5
            bg-gradient-to-br from-sky-400 to-blue-500
            shadow-[0_0_0_3px_rgba(14,165,233,0.15)]" />

          <time className="inline-block px-2.5 py-0.5 rounded-md text-xs font-medium
            bg-sky-50 text-sky-600 border border-sky-100">
            Farmagitechs (Jun 2025 - Present)
          </time>

          <div className="mb-4 space-y-3 mt-4 ms-2">
            <div className="p-3 rounded-xl bg-white/60 border border-sky-50 hover:border-sky-100 hover:bg-white/80 transition-all duration-200">
              <p className="font-semibold text-slate-700 text-sm">
                Fullstack Web Development SIMRS
              </p>
              <p className="text-slate-500 text-sm mt-0.5">Developed and maintained SIMRS web application.</p>
            </div>
            <div className="p-3 rounded-xl bg-white/60 border border-sky-50 hover:border-sky-100 hover:bg-white/80 transition-all duration-200">
              <p className="font-semibold text-slate-700 text-sm">
                Backend Radar System
              </p>
              <p className="text-slate-500 text-sm mt-0.5">Built and maintained backend services for radar system integration.</p>
            </div>
            <div className="p-3 rounded-xl bg-white/60 border border-sky-50 hover:border-sky-100 hover:bg-white/80 transition-all duration-200">
              <p className="font-semibold text-slate-700 text-sm">
                AI Assistant Integration
              </p>
              <p className="text-slate-500 text-sm mt-0.5">Developed fullstack features integrating AI assistant capabilities.</p>
            </div>
          </div>
        </li>

        {/* Bengkel Koding */}
        <li className="ms-6">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5
            bg-gradient-to-br from-sky-400 to-blue-500
            ring-4 ring-sky-50
            shadow-[0_0_0_6px_rgba(14,165,233,0.08)]" />

          <time className="inline-block px-2.5 py-0.5 rounded-md text-xs font-medium
            bg-sky-50 text-sky-600 border border-sky-100">
            Bengkel Koding (Sept 2024 - Feb 2026)
          </time>

          <div className="space-y-3 mt-4 ms-2">
            <div className="p-3 rounded-xl bg-white/60 border border-sky-50 hover:border-sky-100 hover:bg-white/80 transition-all duration-200">
              <p className="font-semibold text-slate-700 text-sm">Bengkel Koding Leader</p>
              <p className="text-slate-500 text-sm mt-0.5">Led and coordinated development activities within the community, guided team members in building web applications, and ensured collaboration in delivering learning based projects.</p>
            </div>
            <div className="p-3 rounded-xl bg-white/60 border border-sky-50 hover:border-sky-100 hover:bg-white/80 transition-all duration-200">
              <p className="font-semibold text-slate-700 text-sm">LMS Backend Development</p>
              <p className="text-slate-500 text-sm mt-0.5">Developed and maintained backend system for learning management platform.</p>
            </div>
            <div className="p-3 rounded-xl bg-white/60 border border-sky-50 hover:border-sky-100 hover:bg-white/80 transition-all duration-200">
              <p className="font-semibold text-slate-700 text-sm">API & Database Design</p>
              <p className="text-slate-500 text-sm mt-0.5">Designed APIs and structured database for scalable system architecture.</p>
            </div>
            <div className="p-3 rounded-xl bg-white/60 border border-sky-50 hover:border-sky-100 hover:bg-white/80 transition-all duration-200">
              <p className="font-semibold text-slate-700 text-sm">Frontend & Backend History Indoor Duration</p>
              <p className="text-slate-500 text-sm mt-0.5">Built a fullstack system for tracking indoor activity history and duration, covering both frontend UI and backend services.</p>
            </div>
          </div>
        </li>

      </ol>

      {/* Education */}
      <h2 className="mt-14 text-xl md:text-4xl font-light leading-tight text-slate-700">
        Education
      </h2>

      <ol className="relative mt-10 border-s ms-1 border-sky-200/60">

        <li className="-mt-2 mb-6 ms-6">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5
            bg-gradient-to-br from-sky-400 to-blue-500
            shadow-[0_0_0_3px_rgba(14,165,233,0.15)]" />
          <time className="inline-block px-2.5 py-0.5 rounded-md text-xs font-medium
            bg-sky-50 text-sky-600 border border-sky-100">
            2022 - 2026
          </time>
          <div className="mt-2 ms-2 p-3 rounded-xl bg-white/60 border border-sky-50 hover:border-sky-100 hover:bg-white/80 transition-all duration-200 inline-block w-full">
            <p className="font-semibold text-slate-700 text-sm">Bachelor of Engineering</p>
            <p className="text-slate-500 text-sm mt-0.5">Informatics Engineering - Dian Nuswantoro University</p>
          </div>
        </li>

        <li className="mb-6 ms-6">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5
            bg-gradient-to-br from-sky-400 to-blue-500
            shadow-[0_0_0_3px_rgba(14,165,233,0.15)]" />
          <time className="inline-block px-2.5 py-0.5 rounded-md text-xs font-medium
            bg-sky-50 text-sky-600 border border-sky-100">
            Feb 2024 - Jun 2024
          </time>
          <div className="mt-2 ms-2 p-3 rounded-xl bg-white/60 border border-sky-50 hover:border-sky-100 hover:bg-white/80 transition-all duration-200 inline-block w-full">
            <p className="font-semibold text-slate-700 text-sm">Student Exchange - Computer Science</p>
            <p className="text-slate-500 text-sm mt-0.5">Gadjah Mada University</p>
          </div>
        </li>

        <li className="ms-6">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5
            bg-gradient-to-br from-sky-400 to-blue-500
            ring-4 ring-sky-50
            shadow-[0_0_0_6px_rgba(14,165,233,0.08)]" />
          <time className="inline-block px-2.5 py-0.5 rounded-md text-xs font-medium
            bg-sky-50 text-sky-600 border border-sky-100">
            2019 - 2022
          </time>
          <div className="mt-2 ms-2 p-3 rounded-xl bg-white/60 border border-sky-50 hover:border-sky-100 hover:bg-white/80 transition-all duration-200 inline-block w-full">
            <p className="font-semibold text-slate-700 text-sm">Software Engineering (Rekayasa Perangkat Lunak)</p>
            <p className="text-slate-500 text-sm mt-0.5">SMK Telekomunikasi Tunas Harapan</p>
          </div>
        </li>

      </ol>

      {/* Achievement */}
      <h2 className="mt-14 text-xl md:text-4xl font-light leading-tight text-slate-700">
        Achievement
      </h2>

      <ol className="relative mt-10 border-s ms-1 border-sky-200/60">

        <li className="-mt-2 mb-6 ms-6">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5
            bg-gradient-to-br from-sky-400 to-blue-500
            shadow-[0_0_0_3px_rgba(14,165,233,0.15)]" />
          <time className="inline-block px-2.5 py-0.5 rounded-md text-xs font-medium
            bg-sky-50 text-sky-600 border border-sky-100">
            2022 - 2026
          </time>
          <div className="mt-2 ms-2 p-3 rounded-xl bg-white/60 border border-sky-50 hover:border-sky-100 hover:bg-white/80 transition-all duration-200 inline-block w-full">
            <p className="font-semibold text-slate-700 text-sm">96% Academic Scholarship Award</p>
            <p className="text-slate-500 text-sm mt-0.5">Dian Nuswantoro University - awarded for academic performance from SMK Telekomunikasi Tunas Harapan.</p>
          </div>
        </li>

        <li className="mb-6 ms-6">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5
            bg-gradient-to-br from-sky-400 to-blue-500
            shadow-[0_0_0_3px_rgba(14,165,233,0.15)]" />
          <time className="inline-block px-2.5 py-0.5 rounded-md text-xs font-medium
            bg-sky-50 text-sky-600 border border-sky-100">
            2022
          </time>
          <div className="mt-2 ms-2 p-3 rounded-xl bg-white/60 border border-sky-50 hover:border-sky-100 hover:bg-white/80 transition-all duration-200 inline-block w-full">
            <p className="font-semibold text-slate-700 text-sm">2nd Rank Graduate</p>
            <p className="text-slate-500 text-sm mt-0.5">SMK Telekomunikasi Tunas Harapan - ranked 2nd among the 2019 cohort.</p>
          </div>
        </li>

        <li className="ms-6">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5
            bg-gradient-to-br from-sky-400 to-blue-500
            ring-4 ring-sky-50
            shadow-[0_0_0_6px_rgba(14,165,233,0.08)]" />
          <time className="inline-block px-2.5 py-0.5 rounded-md text-xs font-medium
            bg-sky-50 text-sky-600 border border-sky-100">
            2022
          </time>
          <div className="mt-2 ms-2 p-3 rounded-xl bg-white/60 border border-sky-50 hover:border-sky-100 hover:bg-white/80 transition-all duration-200 inline-block w-full">
            <p className="font-semibold text-slate-700 text-sm">1st Place - IT Software Solutions for Business</p>
            <p className="text-slate-500 text-sm mt-0.5">Lomba Kompetensi Siswa (LKS) Regency Level</p>
          </div>
        </li>

      </ol>
    </section>
  );
}