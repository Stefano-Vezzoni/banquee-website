import { Icon } from "@iconify/react/dist/iconify.js";

interface ICompareTableGridElement {
    name: string;
    description: string;
    icon: string;
}

export function CompareTableGridElement({ name, description, icon }: ICompareTableGridElement) {
    return (
        <div className="flex items-center space-x-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primaryLight">
                <Icon className="h-7 w-7 text-primary" icon={icon} />
            </span>

            <div>
                <p className="text-lg">{name}</p>
                <p className="text-sm text-muted opacity-50">{description}</p>
            </div>
        </div>
    );
}
