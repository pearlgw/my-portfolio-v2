import { LucideIcon } from "lucide-react";

type BadgeProps = {
  name: string;
  icon?: LucideIcon;
};

export default function Badge({ name, icon: Icon }: BadgeProps) {
  return (
    <div className="mb-6">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-blue-600 bg-blue-50 border border-blue-100 shadow-sm">

        {/* Icon */}
        {Icon && <Icon size={16} />}

        {/* Text */}
        <span className="font-medium">{name}</span>
      </div>
    </div>
  );
}