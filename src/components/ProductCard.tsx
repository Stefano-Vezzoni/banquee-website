import { Icon } from "@iconify/react/dist/iconify.js";

interface IProductCard {
    title: string;
    subtitle: string;
    price?: string;
    icon?: string;
    bgColor?: string;
}

export function ProductCard({ title, subtitle, price, icon, bgColor = "bg-white" }: IProductCard) {
    return (
        <div className={`flex items-center justify-between rounded-lg p-4 font-medium ${bgColor}`}>
            <div className="flex gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                    {icon ? (
                        <Icon icon={`${icon}`} width="34" height="34" color="white" />
                    ) : (
                        <span className="text-3xl font-bold text-white">b.</span>
                    )}
                </span>

                <div>
                    <h3 className="text-lg">{title}</h3>

                    <p className="text-muted opacity-50">{subtitle}</p>
                </div>
            </div>

            {price && <p className="ml-44 text-lg">-{price}€</p>}
        </div>
    );
}
