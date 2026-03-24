import { LucideIcon } from "lucide-react";

type ServiceCardProps = {
    title: string;
    description: string;
    icon: LucideIcon;
};

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
    return (
        <div className="flex items-start gap-4 px-5 py-4
            rounded-2xl
            bg-white/60 border border-sky-100/80
            shadow-[0_2px_8px_rgba(14,165,233,0.06)]
            hover:border-sky-300 hover:bg-sky-50/60
            hover:shadow-[0_4px_20px_rgba(14,165,233,0.14)]
            hover:-translate-y-0.5
            transition-all duration-200 group cursor-default">

            {/* Icon box */}
            <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center
                bg-sky-50 border border-sky-100
                group-hover:bg-sky-100 group-hover:border-sky-200
                shadow-[0_2px_6px_rgba(14,165,233,0.1)]
                transition-all duration-200">
                <Icon size={18} className="text-sky-500 group-hover:text-sky-600 transition-colors duration-200" />
            </div>

            {/* Text */}
            <div>
                <p className="font-semibold text-sm text-slate-700 group-hover:text-sky-700 transition-colors duration-200">
                    {title}
                </p>
                <p className="text-sm text-slate-400 mt-0.5 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
