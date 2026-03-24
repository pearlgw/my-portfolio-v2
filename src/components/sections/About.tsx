import { User } from "lucide-react";
import Badge from "../ui/Badge";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center pb-24 -mt-32 md:mt-0"
    >
      {/* Badge */}
      <Badge name="About" icon={User} />

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-slate-800">
        Every great product begins with a clear purpose
        and{" "}
        <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
          thoughtful execution.
        </span>
      </h2>

      {/* Content */}
      <p className="mt-6 text-lg text-slate-500 leading-relaxed">
        I've been building web applications and backend systems with a focus on
        reliability, efficiency, and scalability. From developing fullstack
        platforms to designing APIs and integrating modern technologies, I enjoy
        turning complex problems into simple and usable solutions.
      </p>

      <p className="mt-3 text-slate-400 leading-relaxed">
        I'm naturally curious, detail-oriented, and always improving how I design
        systems and write clean, maintainable code.
      </p>

      {/* Stats */}
      <div className="mt-10 flex gap-4 md:gap-6 md:flex-wrap">

        <div className="flex-1 md:flex-none px-4 md:px-6 py-5 rounded-2xl
          bg-white/70 backdrop-blur-sm
          border border-sky-100/80
          shadow-[0_4px_20px_rgba(14,165,233,0.08)]
          flex flex-col items-center md:min-w-[120px]">
          <h3 className="text-3xl font-bold
            bg-gradient-to-br from-sky-500 to-blue-600
            bg-clip-text text-transparent">
            3+
          </h3>
          <p className="text-xs text-slate-400 mt-1.5 text-center font-medium tracking-wide uppercase">
            Years of Experience
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
            10+
          </h3>
          <p className="text-xs text-slate-400 mt-1.5 text-center font-medium tracking-wide uppercase">
            Projects Completed
          </p>
        </div>

      </div>
    </section>
  );
}