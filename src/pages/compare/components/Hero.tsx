import CompareHeroCards from "../../../assets/CompareHeroCards.svg";

export function Hero() {
    return (
        <div className="relative overflow-hidden bg-primaryLight px-40 py-32">
            <div className="">
                <p>Compare Cards</p>
                <h2 className="mt-4 text-7xl">The ideal</h2>
                <h2 className="text-7xl">card for you</h2>
            </div>

            <img className="absolute right-40 top-20" src={CompareHeroCards} />
        </div>
    );
}
