import { IconTextInline } from "../../../components/IconTextInline";
import OneAppImage from "../../../assets/OneAppImage.svg";
import { Icon } from "@iconify/react/dist/iconify.js";

export function OneAppSecond() {
    return (
        <div className="relative flex items-start overflow-hidden rounded-[20px] bg-primary px-20 py-24 text-slate-50">
            <div className="flex max-w-[540px] flex-col items-start">
                <h1 className="flex flex-col text-mHeading1 leading-tight">
                    <h2>One app.</h2>
                    <h2 className="-mt-4">One banking.</h2>

                    <p className="mt-4 text-lg font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna.
                    </p>
                </h1>

                <div className="text- mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
                    <IconTextInline
                        text="Instant Transfer"
                        bgColor="bg-primaryLightButton"
                        iconColor="white"
                    />
                    <IconTextInline
                        text="Payments worldwide"
                        bgColor="bg-primaryLightButton"
                        iconColor="white"
                    />
                    <IconTextInline
                        text="Saving accounts"
                        bgColor="bg-primaryLightButton"
                        iconColor="white"
                    />
                    <IconTextInline
                        text="100% mobile banking"
                        bgColor="bg-primaryLightButton"
                        iconColor="white"
                    />
                </div>

                <div className="mt-12 flex gap-4 text-slate-50">
                    <button className="flex items-center gap-3 rounded-lg bg-black pl-[2px] pr-3">
                        <Icon className="text-5xl" icon="ic:round-apple" />

                        <span className="flex flex-col items-start py-2">
                            <p className="text-xs">GET IT ON</p>

                            <p className="-mt-1 text-xl">Google Play</p>
                        </span>
                    </button>

                    <button className="flex items-center gap-3 rounded-lg bg-black px-3 py-2">
                        <Icon className="text-[40px]" icon="logos:google-play-icon" />

                        <span className="flex flex-col items-start">
                            <p className="text-xs">GET IT ON</p>

                            <p className="-mt-1 text-xl">Google Play</p>
                        </span>
                    </button>
                </div>
            </div>

            <img className="absolute right-20 overflow-hidden pt-4" src={OneAppImage} />
        </div>
    );
}
