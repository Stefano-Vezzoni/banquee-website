import { OpenAccount } from "../../../components/OpenAccount";
import { TextIconInline } from "../../../components/TextIconInline";
import featuresCards from "../../../assets/featuresCards.svg";

export function Hero() {
    return (
        <div className="flex flex-col items-center justify-center bg-primaryLight pt-32">
            <div className="max-w-[460px] text-center">
                <p>Features</p>

                <h1 className="mt-2 text-7xl">All in one card.</h1>

                <p className="mt-4">
                    Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo duis ut
                    diam.
                </p>
            </div>

            <span className="mt-8 flex gap-8">
                <OpenAccount />

                <TextIconInline name="Compare Cards" />
            </span>

            <img className="mt-32" src={featuresCards} />
        </div>
    );
}
