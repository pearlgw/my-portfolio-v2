import Badge from '../ui/Badge'
import { Code, Cpu, Database, Globe, Server, Settings, Workflow } from 'lucide-react'
import ServiceCard from '../ui/ServiceCard'

export default function Service({ dict }: { dict: any }) {
  return (
    <section id="service" className="flex flex-col justify-center pb-24">
      <Badge name={dict.badge} icon={Settings} />

      <h2 className="mt-4 text-xl md:text-4xl font-light leading-tight text-slate-700">
        {dict.heading.part1}
        <span className="font-semibold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
          {dict.heading.part2}
        </span>
      </h2>

      <div className="mt-8 space-y-3">
        <ServiceCard
          title={dict.items.web.title}
          description={dict.items.web.desc}
          icon={Globe}
        />
        <ServiceCard
          title={dict.items.backend.title}
          description={dict.items.backend.desc}
          icon={Server}
        />
        <ServiceCard
          title={dict.items.system.title}
          description={dict.items.system.desc}
          icon={Workflow}
        />
        <ServiceCard
          title={dict.items.database.title}
          description={dict.items.database.desc}
          icon={Database}
        />
        <ServiceCard
          title={dict.items.api.title}
          description={dict.items.api.desc}
          icon={Cpu}
        />
        <ServiceCard
          title={dict.items.fullstack.title}
          description={dict.items.fullstack.desc}
          icon={Code}
        />
      </div>
    </section>
  )
}
