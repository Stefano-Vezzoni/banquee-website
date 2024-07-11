import ThreeCreditCard from "../../../assets/ThreeCreditCards.svg";
import { OpenAccount } from "../../../components/OpenAccount";
import { TextIconInline } from "../../../components/TextIconInline";

export function Account() {
    return (
        <div className="flex flex-col items-center justify-center">
            <p className="text-xl">Account</p>

            <h2 className="mt-2 text-center text-7xl">
                Perfect card <br />
                for your needs.
            </h2>

            <p className="mt-4 text-center text-xl">
                Senectus et netus et malesuada fames ac turpis. <br />
                Sagittis vitae et leo duis ut diam.
            </p>

            <img className="mt-14" src={ThreeCreditCard} />

            <span className="mt-14 flex gap-4">
                <OpenAccount />

                <TextIconInline name="Compare Cards" />
            </span>
        </div>
    );
}
