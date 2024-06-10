import { Icon } from '@iconify/react';

export function CompareCards() {
    return (
        <button className="flex gap-2 items-center text-lg text-primary font-medium">
            Compare Cards
            <Icon icon="ri:arrow-right-line" width="20" height="20" />
        </button>
    );
}