import { Icon } from "@iconify/react/dist/iconify.js";

interface IIconTextInline {
    text: string;
    bgColor: string;
    iconColor: string;
}

export function IconTextInline({ text, bgColor, iconColor }: IIconTextInline) {
    return (
        <span className="flex items-center gap-4 text-lg font-medium">
            <span className={`flex h-6 w-6 items-center justify-center rounded-full ${bgColor}`}>
                <Icon className={`text-${iconColor}`} icon="ri:check-fill" width="16" height="16" />
            </span>

            {text}
        </span>
    );
}
