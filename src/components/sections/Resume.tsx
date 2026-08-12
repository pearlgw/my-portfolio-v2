import { FileText } from "lucide-react";
import Badge from "../ui/Badge";

export default function Resume({ dict }: { dict: any }) {
  return (
    <section id="resume" className="flex flex-col justify-center pb-24">
      <Badge name={dict.badge} icon={FileText} />

      {/* Experience */}
      <h2 className="mt-4 text-xl md:text-4xl font-light leading-tight text-slate-700">
        {dict.titles.experience}
      </h2>

      <ol className="relative mt-10 border-s ms-1 border-sky-400/60">

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
                {dict.experiences.farmagitechs.title1}
              </p>
              <p className="text-slate-500 text-sm mt-0.5">{dict.experiences.farmagitechs.desc1}</p>
            </div>
            <div className="p-3 rounded-xl bg-white/60 border border-sky-50 hover:border-sky-100 hover:bg-white/80 transition-all duration-200">
              <p className="font-semibold text-slate-700 text-sm">
                {dict.experiences.farmagitechs.title2}
              </p>
              <p className="text-slate-500 text-sm mt-0.5">{dict.experiences.farmagitechs.desc2}</p>
            </div>
            <div className="p-3 rounded-xl bg-white/60 border border-sky-50 hover:border-sky-100 hover:bg-white/80 transition-all duration-200">
              <p className="font-semibold text-slate-700 text-sm">
                {dict.experiences.farmagitechs.title3}
              </p>
              <p className="text-slate-500 text-sm mt-0.5">{dict.experiences.farmagitechs.desc3}</p>
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
              <p className="font-semibold text-slate-700 text-sm">{dict.experiences.bengkel.title1}</p>
              <p className="text-slate-500 text-sm mt-0.5">{dict.experiences.bengkel.desc1}</p>
            </div>
            <div className="p-3 rounded-xl bg-white/60 border border-sky-50 hover:border-sky-100 hover:bg-white/80 transition-all duration-200">
              <p className="font-semibold text-slate-700 text-sm">{dict.experiences.bengkel.title2}</p>
              <p className="text-slate-500 text-sm mt-0.5">{dict.experiences.bengkel.desc2}</p>
            </div>
            <div className="p-3 rounded-xl bg-white/60 border border-sky-50 hover:border-sky-100 hover:bg-white/80 transition-all duration-200">
              <p className="font-semibold text-slate-700 text-sm">{dict.experiences.bengkel.title3}</p>
              <p className="text-slate-500 text-sm mt-0.5">{dict.experiences.bengkel.desc3}</p>
            </div>
            <div className="p-3 rounded-xl bg-white/60 border border-sky-50 hover:border-sky-100 hover:bg-white/80 transition-all duration-200">
              <p className="font-semibold text-slate-700 text-sm">{dict.experiences.bengkel.title4}</p>
              <p className="text-slate-500 text-sm mt-0.5">{dict.experiences.bengkel.desc4}</p>
            </div>
          </div>
        </li>

      </ol>

      {/* Education */}
      <h2 className="mt-14 text-xl md:text-4xl font-light leading-tight text-slate-700">
        {dict.titles.education}
      </h2>

      <ol className="relative mt-10 border-s ms-1 border-sky-400/60">

        <li className="-mt-2 mb-6 ms-6">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5
            bg-gradient-to-br from-sky-400 to-blue-500
            shadow-[0_0_0_3px_rgba(14,165,233,0.15)]" />
          <time className="inline-block px-2.5 py-0.5 rounded-md text-xs font-medium
            bg-sky-50 text-sky-600 border border-sky-100">
            2022 - 2026
          </time>
          <div className="mt-2 ms-2 p-3 rounded-xl bg-white/60 border border-sky-50 hover:border-sky-100 hover:bg-white/80 transition-all duration-200 inline-block w-full">
            <p className="font-semibold text-slate-700 text-sm">{dict.education.dianNuswantoro.title}</p>
            <p className="text-slate-500 text-sm mt-0.5">{dict.education.dianNuswantoro.desc}</p>
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
            <p className="font-semibold text-slate-700 text-sm">{dict.education.gadjahMada.title}</p>
            <p className="text-slate-500 text-sm mt-0.5">{dict.education.gadjahMada.desc}</p>
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
            <p className="font-semibold text-slate-700 text-sm">{dict.education.tunasHarapan.title}</p>
            <p className="text-slate-500 text-sm mt-0.5">{dict.education.tunasHarapan.desc}</p>
          </div>
        </li>

      </ol>

      {/* Achievement */}
      <h2 className="mt-14 text-xl md:text-4xl font-light leading-tight text-slate-700">
        {dict.titles.achievement}
      </h2>

      <ol className="relative mt-10 border-s ms-1 border-sky-400/60">

        <li className="-mt-2 mb-6 ms-6">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5
            bg-gradient-to-br from-sky-400 to-blue-500
            shadow-[0_0_0_3px_rgba(14,165,233,0.15)]" />
          <time className="inline-block px-2.5 py-0.5 rounded-md text-xs font-medium
            bg-sky-50 text-sky-600 border border-sky-100">
            2022 - 2026
          </time>
          <div className="mt-2 ms-2 p-3 rounded-xl bg-white/60 border border-sky-50 hover:border-sky-100 hover:bg-white/80 transition-all duration-200 inline-block w-full">
            <p className="font-semibold text-slate-700 text-sm">{dict.achievements.scholarship.title}</p>
            <p className="text-slate-500 text-sm mt-0.5">{dict.achievements.scholarship.desc}</p>
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
            <p className="font-semibold text-slate-700 text-sm">{dict.achievements.rank2.title}</p>
            <p className="text-slate-500 text-sm mt-0.5">{dict.achievements.rank2.desc}</p>
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
            <p className="font-semibold text-slate-700 text-sm">{dict.achievements.lks.title}</p>
            <p className="text-slate-500 text-sm mt-0.5">{dict.achievements.lks.desc}</p>
          </div>
        </li>

      </ol>
    </section>
  );
}