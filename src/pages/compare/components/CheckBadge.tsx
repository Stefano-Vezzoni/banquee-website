import { Icon } from "@iconify/react/dist/iconify.js";

export function CheckBadge() {
    return (
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primaryLight">
            <Icon className="h-5 w-5 text-primary" icon={"ri:check-fill"} />
        </div>
    );
}
