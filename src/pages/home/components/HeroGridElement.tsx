import { Icon } from "@iconify/react/dist/iconify.js";

interface IHeroGridElement {
    text: string;
}

export function HeroGridElement({ text }: IHeroGridElement) {
    return (
        <span className="flex items-center gap-4 text-lg font-medium ">
            <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primaryLight">
                <Icon className='w-4 h-4' icon="ri:check-fill" />
            </span>

            {text}
        </span>
    );
}