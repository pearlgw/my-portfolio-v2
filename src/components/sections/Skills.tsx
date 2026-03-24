import { PencilRuler } from "lucide-react";
import Badge from "../ui/Badge";
import TechCard from "../ui/TechCard";
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiPhp, SiScala,
  SiNodedotjs, SiExpress, SiNestjs, SiNextdotjs, SiReact, SiReactbootstrap,
  SiBootstrap, SiTailwindcss, SiLaravel, SiCodeigniter, SiFastapi,
  SiPostman, SiInsomnia, SiMysql, SiPostgresql, SiMongodb, SiPython,
  SiGithub, SiGitlab, SiCplusplus, SiSharp,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { DiJava } from "react-icons/di";
import { FaDocker } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skill" className="flex flex-col justify-center pb-24">
      <Badge name="Skills" icon={PencilRuler} />

      <h2 className="mt-4 text-xl md:text-4xl font-extralight leading-tight text-slate-700">
        My{" "}
        <span className="font-semibold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
          Expertise
        </span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-8">
        <TechCard name="HTML" icon={SiHtml5} />
        <TechCard name="CSS" icon={SiCss} />
        <TechCard name="JavaScript" icon={SiJavascript} />
        <TechCard name="TypeScript" icon={SiTypescript} />
        <TechCard name="PHP" icon={SiPhp} />
        <TechCard name="Java" icon={DiJava} />

        <TechCard name="Scala" icon={SiScala} />
        <TechCard name="Node.js" icon={SiNodedotjs} />
        <TechCard name="Express" icon={SiExpress} />
        <TechCard name="NestJS" icon={SiNestjs} />
        <TechCard name="Next.js" icon={SiNextdotjs} />
        <TechCard name="React" icon={SiReact} />

        <TechCard name="React Native" icon={TbBrandReactNative} />
        <TechCard name="Bootstrap" icon={SiBootstrap} />
        <TechCard name="Tailwind" icon={SiTailwindcss} />
        <TechCard name="Laravel" icon={SiLaravel} />
        <TechCard name="CodeIgniter" icon={SiCodeigniter} />
        <TechCard name="Play Framework" icon={SiScala} />

        <TechCard name="FastAPI" icon={SiFastapi} />
        <TechCard name="ERD Design" icon={VscVscode} />
        <TechCard name="React Bootstrap" icon={SiReactbootstrap} />
        <TechCard name="C#" icon={SiSharp} />
        <TechCard name="GitHub" icon={SiGithub} />
        <TechCard name="C++" icon={SiCplusplus} />

        <TechCard name="Postman" icon={SiPostman} />
        <TechCard name="Insomnia" icon={SiInsomnia} />
        <TechCard name="Thunder Client" icon={VscVscode} />
        <TechCard name="MySQL" icon={SiMysql} />
        <TechCard name="PostgreSQL" icon={SiPostgresql} />
        <TechCard name="MongoDB" icon={SiMongodb} />

        <TechCard name="Python" icon={SiPython} />
        <TechCard name="GitLab" icon={SiGitlab} />
        <TechCard name="Docker" icon={FaDocker} />
      </div>
    </section>
  );
}
