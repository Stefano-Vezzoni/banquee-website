import { Icon } from "@iconify/react/dist/iconify.js";

interface IOneAppSquareBenefits {
    icon: string;
    title: string;
    description: string;
}

export function OneAppGridElement({ icon, title, description }: IOneAppSquareBenefits) {
    return (
        <div className='p-8 max-w-72 border-2 rounded-2xl'>
            <span className="flex items-center justify-center w-12 h-12 text-primary bg-primaryLight rounded-full">
                <Icon icon={icon} width="28" height="28" />
            </span>

            <h3 className='mt-4 max-w-12 text-xl font-medium'>
                {title}
            </h3>

            <p className='mt-2 font-medium'>
                {description}
            </p>
        </div>
    );
}