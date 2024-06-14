import { Icon } from '@iconify/react';

interface ICompareCards {
    name: string;
}

export function CompareCards({ name }: ICompareCards) {
    return (
        <button className="flex gap-2 items-center text-lg text-primary font-medium">
            {name}
            <Icon icon="ri:arrow-right-line" width="20" height="20" />
        </button>
    );
}