import { Icon } from "@iconify/react/dist/iconify.js";

interface IOneAppSquareBenefits {
    icon: string;
    title: string;
    description: string;
}

export function OneAppGridElement({ icon, title, description }: IOneAppSquareBenefits) {
    return (
        <div className="max-w-72 rounded-2xl border-2 p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primaryLight text-primary">
                <Icon icon={icon} width="28" height="28" />
            </span>

            <h3 className="mt-4 max-w-12 text-xl">{title}</h3>

            <p className="mt-2">{description}</p>
        </div>
    );
}
