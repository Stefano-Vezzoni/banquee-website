import SupportHero from "../../../assets/SupportHero.svg";

export function Hero() {
    return (
        <div className="relative overflow-hidden bg-primaryLight px-40 py-32">
            <div className="">
                <p>Support</p>
                <h2 className="mt-4 text-7xl">How can</h2>
                <h2 className="text-7xl">we help you?</h2>
            </div>

            <img className="absolute right-48 top-20" src={SupportHero} />
        </div>
    );
}
