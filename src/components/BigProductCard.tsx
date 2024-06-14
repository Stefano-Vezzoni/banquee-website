import { Icon } from "@iconify/react/dist/iconify.js";

interface iBigProductCard {
    icon: string;
    title?: string;
    price?: string;
    bgColor: string;
}

export function BigProductCard({ icon, title, price, bgColor }: iBigProductCard) {
    return (
        <div className="flex-grow">
            <span className={`flex items-center justify-center w-auto h-52 rounded-2xl 
                ${bgColor}`}>
                <Icon className="2xl:w-20 2xl:h-20" icon={icon} width="64" height="64" />
            </span>

            {title &&
                <h2 className="mt-4 text-xl font-medium">
                    {title}
                </h2>
            }

            {price &&
                <p className="mt-1 text-sm text-muted font-medium opacity-50">
                    {price}$
                </p>
            }
        </div>
    );
}