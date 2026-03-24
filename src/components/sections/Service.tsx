import Badge from '../ui/Badge'
import { Code, Cpu, Database, Globe, Server, Settings, Workflow } from 'lucide-react'
import ServiceCard from '../ui/ServiceCard'

export default function Service() {
  return (
    <section id="service" className="flex flex-col justify-center pb-24">
      <Badge name="Service" icon={Settings} />

      <h2 className="mt-4 text-xl md:text-4xl font-light leading-tight text-slate-700">
        My{" "}
        <span className="font-semibold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
          Specializations
        </span>
      </h2>

      <div className="mt-8 space-y-3">
        <ServiceCard
          title="Web Development"
          description="Building modern, responsive, and scalable web applications."
          icon={Globe}
        />
        <ServiceCard
          title="Backend Development"
          description="Designing robust APIs, authentication, and business logic."
          icon={Server}
        />
        <ServiceCard
          title="System Architecture"
          description="Structuring clean, scalable, and maintainable systems."
          icon={Workflow}
        />
        <ServiceCard
          title="Database Design"
          description="Designing efficient schemas, ERD, and optimized queries."
          icon={Database}
        />
        <ServiceCard
          title="API Integration"
          description="Integrating third-party services, payments, and IoT systems."
          icon={Cpu}
        />
        <ServiceCard
          title="Fullstack Development"
          description="Handling end-to-end development from frontend to backend."
          icon={Code}
        />
      </div>
    </section>
  )
}
