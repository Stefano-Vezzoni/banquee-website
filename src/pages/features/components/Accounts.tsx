import { CardPlans } from "./CardPlans";
import CardGreen from "../../../assets/CardGreen.svg";
import CardBlack from "../../../assets/CardBlack.svg";
import CardBeige from "../../../assets/CardBeige.svg";

export function Accounts() {
    return (
        <div className="mx-40 flex flex-col items-center justify-center space-y-24">
            <div className="text-center">
                <p>Accounts</p>
                <h2 className="mt-2 text-6xl">Choose your card.</h2>
                <p className="mt-4 max-w-[500px]">
                    Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo duis ut
                    diam.
                </p>
            </div>

            <div className="flex gap-14">
                <CardPlans
                    isPopular
                    title="Basic"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    cardImage={CardGreen}
                />

                <CardPlans
                    title="Premium"
                    price="5"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    cardImage={CardBlack}
                />

                <CardPlans
                    title="Gold"
                    price="10"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    cardImage={CardBeige}
                />
            </div>
        </div>
    );
}
