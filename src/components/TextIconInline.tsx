import { Icon } from "@iconify/react";

interface ITextIconInline {
    name: string;
}

export function TextIconInline({ name }: ITextIconInline) {
    return (
        <button className="flex items-center gap-2 text-lg font-medium text-primary">
            {name}
            <Icon icon="ri:arrow-right-line" width="20" height="20" />
        </button>
    );
}
