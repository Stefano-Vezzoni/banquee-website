import HeroCards from "../../../assets/HeroCards.svg";
import { CompareCards } from "../../../components/CompareCards";
import { IconTextInline } from "../../../components/IconTextInline";
import { OpenAccount } from "../../../components/OpenAccount";

export function Hero() {
    return (
        <div className="my-32 flex gap-32">
            <div className="pb-4">
                <h1 className="text-8xl">
                    Banking <br />
                    starts here.
                </h1>

                <p className="mt-4 max-w-[600px] text-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
                    <IconTextInline
                        text="Instant Transfer"
                        bgColor="bg-primaryLight"
                        iconColor="primary"
                    />
                    <IconTextInline
                        text="Payments worldwide"
                        bgColor="bg-primaryLight"
                        iconColor="primary"
                    />
                    <IconTextInline
                        text="Saving accounts"
                        bgColor="bg-primaryLight"
                        iconColor="primary"
                    />
                    <IconTextInline
                        text="100% mobile banking"
                        bgColor="bg-primaryLight"
                        iconColor="primary"
                    />
                </div>

                <span className="mt-16 flex gap-8">
                    <OpenAccount />

                    <CompareCards name="Compare Cards" />
                </span>
            </div>

            <img className="h-auto object-cover" src={HeroCards} />
        </div>
    );
}
