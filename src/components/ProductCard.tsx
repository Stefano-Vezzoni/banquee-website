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
        <div className={`flex items-center justify-between p-4 rounded-lg ${bgColor}`}>
            <div className="flex gap-4">
                <span className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary">
                    {icon
                        ? <Icon icon={`${icon}`} width="34" height="34" color="white" />
                        : <span className="text-white text-3xl font-bold">
                            b.
                        </span>
                    }
                </span>

                <div>
                    <h3 className="text-lg font-medium">
                        {title}
                    </h3>

                    <p className="font-medium text-muted opacity-50">
                        {subtitle}
                    </p>
                </div>
            </div>

            {price &&
                <p className="ml-44 text-lg font-medium">
                    -{price}€
                </p>
            }
        </div>
    );
}