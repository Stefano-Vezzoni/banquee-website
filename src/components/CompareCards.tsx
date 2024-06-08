import { Icon } from '@iconify/react';

export function CompareCards() {
    return (
        <button className="flex gap-1 items-center text-lg text-primary font-medium">
            Compare Cards
            <Icon className='w-5 h-5' icon="ri:arrow-right-line" />
        </button>
    );
}