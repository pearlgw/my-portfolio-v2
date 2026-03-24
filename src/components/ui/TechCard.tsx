/* eslint-disable @typescript-eslint/no-explicit-any */
type TechCardProps = {
    name: string;
    icon: any;
};

export default function TechCard({ name, icon: Icon }: TechCardProps) {
    return (
        <div className="flex flex-col items-center justify-center rounded-xl p-4
            bg-white/60 border border-sky-100/80
            shadow-[0_2px_8px_rgba(14,165,233,0.06)]
            hover:border-sky-300 hover:bg-sky-50/80
            hover:shadow-[0_4px_16px_rgba(14,165,233,0.18)]
            hover:-translate-y-0.5
            transition-all duration-200 group cursor-default">
            <Icon className="w-8 h-8 md:h-[8vh] text-slate-400 group-hover:text-sky-500 transition-colors duration-200" />
            <p className="mt-2 text-xs font-medium text-slate-500 group-hover:text-sky-600 text-center transition-colors duration-200">
                {name}
            </p>
        </div>
    );
}
