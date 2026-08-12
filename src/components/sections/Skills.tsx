import { PencilRuler, Network, Server, Workflow, Code2, Package, Terminal, Scan } from "lucide-react";
import Badge from "../ui/Badge";
import TechCard from "../ui/TechCard";
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiPhp, SiScala,
  SiNodedotjs, SiExpress, SiNestjs, SiNextdotjs, SiReact, SiReactbootstrap,
  SiBootstrap, SiTailwindcss, SiLaravel, SiCodeigniter, SiFastapi,
  SiPostman, SiInsomnia, SiMysql, SiPostgresql, SiMongodb, SiPython,
  SiGithub, SiGitlab, SiCplusplus, SiSharp,
  SiGit, SiLinux, SiSass, SiGo, SiMui, SiInertia, SiGithubactions, SiVuedotjs, SiBruno,
  SiRedis, SiKeycloak, SiN8N, SiApachekafka, SiSelenium, SiK6, SiPrisma, SiTypeorm, 
  SiWhatsapp, SiMinio, SiSupabase, SiDotnet, SiAndroidstudio, SiLivewire
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { DiJava } from "react-icons/di";
import { FaDocker, FaDatabase } from "react-icons/fa";

export default function Skills({ dict }: { dict: any }) {
  return (
    <section id="skill" className="flex flex-col justify-center pb-24">
      <Badge name={dict.badge} icon={PencilRuler} />

      <h2 className="mt-4 text-xl md:text-4xl font-extralight leading-tight text-slate-700">
        {dict.heading.part1}
        <span className="font-semibold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
          {dict.heading.part2}
        </span>
      </h2>

      <div className="mt-10 flex flex-col gap-10">
        {[
          {
            title: dict.categories.programming,
            skills: [
              { name: "PHP", icon: SiPhp },
              { name: "JavaScript", icon: SiJavascript },
              { name: "TypeScript", icon: SiTypescript },
              { name: "Python", icon: SiPython },
              { name: "Java", icon: DiJava },
              { name: "Scala", icon: SiScala },
              { name: "C++", icon: SiCplusplus },
              { name: "C#", icon: SiSharp },
              { name: "Go", icon: SiGo },
            ]
          },
          {
            title: dict.categories.backend,
            skills: [
              { name: "Laravel", icon: SiLaravel },
              { name: "CodeIgniter", icon: SiCodeigniter },
              { name: "Node.js", icon: SiNodedotjs },
              { name: "Express.js", icon: SiExpress },
              { name: "Nest.js", icon: SiNestjs },
              { name: "FastAPI", icon: SiFastapi },
              { name: "Play Framework", icon: SiScala },
              { name: ".NET", icon: SiDotnet },
            ]
          },
          {
            title: dict.categories.frontend,
            skills: [
              { name: "HTML", icon: SiHtml5 },
              { name: "CSS", icon: SiCss },
              { name: "React.js", icon: SiReact },
              { name: "Next.js", icon: SiNextdotjs },
              { name: "Vue.js", icon: SiVuedotjs },
              { name: "Tailwind CSS", icon: SiTailwindcss },
              { name: "Material UI", icon: SiMui },
              { name: "Bootstrap", icon: SiBootstrap },
              { name: "Sass", icon: SiSass },
              { name: "React Bootstrap", icon: SiReactbootstrap },
              { name: "React Native", icon: TbBrandReactNative },
              { name: "Inertia Laravel", icon: SiInertia },
              { name: "Livewire", icon: SiLivewire },
            ]
          },
          {
            title: dict.categories.databases,
            skills: [
              { name: "MySQL", icon: SiMysql },
              { name: "PostgreSQL", icon: SiPostgresql },
              { name: "MongoDB", icon: SiMongodb },
              { name: "SQL Server Management", icon: FaDatabase },
              { name: "Redis", icon: SiRedis },
              { name: "Supabase", icon: SiSupabase },
            ]
          },
          {
            title: dict.categories.tools,
            skills: [
              { name: "Docker", icon: FaDocker },
              { name: "VPS", icon: Server },
              { name: "Operasi Linux", icon: SiLinux },
              { name: "Git", icon: SiGit },
              { name: "GitHub", icon: SiGithub },
              { name: "GitLab", icon: SiGitlab },
              { name: "GitHub Actions", icon: SiGithubactions },
              { name: "Postman", icon: SiPostman },
              { name: "Insomnia", icon: SiInsomnia },
              { name: "Thunder Client", icon: VscVscode },
              { name: "Bruno", icon: SiBruno },
              { name: "ERD", icon: Network },
              { name: "Keycloak", icon: SiKeycloak },
              { name: "n8n", icon: SiN8N },
              { name: "Workflow Automation", icon: Workflow },
              { name: "Kafka", icon: SiApachekafka },
              { name: "BeautifulSoup", icon: Code2 },
              { name: "Selenium", icon: SiSelenium },
              { name: "K6", icon: SiK6 },
              { name: "Prisma ORM", icon: SiPrisma },
              { name: "TypeORM", icon: SiTypeorm },
              { name: "Baileys", icon: SiWhatsapp },
              { name: "MinIO", icon: SiMinio },
              { name: "Laravel Spatie", icon: Package },
              { name: "Android Studio", icon: SiAndroidstudio },
              { name: "Paramiko", icon: Terminal },
              { name: "DICOM", icon: Scan },
            ]
          }
        ].map((category, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="text-[14px] md:text-[15px] font-semibold text-sky-600 uppercase tracking-widest mb-5">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {category.skills.map((skill, idx) => (
                <TechCard key={idx} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
