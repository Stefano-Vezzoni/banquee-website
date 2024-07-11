import { Icon } from "@iconify/react/dist/iconify.js";

export function StillHaveQuestions() {
    return (
        <div className="mx-52 flex items-center justify-between rounded-lg bg-primary p-8 text-white">
            <div>
                <p className="text-[28px]">Still have questions?</p>
                <p className="text-lg opacity-70">We are here to help.</p>
            </div>

            <div className="flex items-center justify-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white bg-opacity-20 p-2">
                    <Icon className="text-[22px]" icon={"ri:phone-fill"} />
                </span>
                <span>
                    <p className="text-lg">+49 176 123 456</p>
                    <p className="text-sm opacity-70">Support Hotline</p>
                </span>
            </div>

            <div className="flex items-center justify-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white bg-opacity-20 p-2">
                    <Icon icon={"ri:mail-unread-line"} />
                </span>

                <span>
                    <p className="text-lg">help@bank.com</p>
                    <p className="text-sm opacity-70">Support Email</p>
                </span>
            </div>

            <button className="rounded-md bg-black px-6 py-4 text-center text-lg">
                Chat with us
            </button>
        </div>
    );
}
