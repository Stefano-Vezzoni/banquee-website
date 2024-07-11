import OneAppImg from "../../../assets/OneAppImage.svg";
import FeatureCards from "../../../assets/FeatureCards.svg";
import FeatureSavings from "../../../assets/FeatureSavings.svg";
import FeatureStatistics from "../../../assets/FeatureStatistics.svg";
import { FeatureCard } from "./FeatureCard";

export function Transactions() {
    return (
        <div className="mx-40 mt-40 flex flex-col gap-40">
            <FeatureCard
                subtitle="Transactions"
                title={["Send & receive", "money instantly"]}
                description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                appFeatures={["Malesuada Ipsum", "Vestibulum", "Parturient Lorem"]}
                cardImage={OneAppImg}
            />

            <FeatureCard
                subtitle="Cards"
                title={["Manage", "your cards"]}
                description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                appFeatures={["Amet Consectetur", "Adipisicing Elit", "Qui Quibusdam"]}
                cardImage={FeatureCards}
            />

            <FeatureCard
                subtitle="Advanced Statistics"
                title={["Keep control", "over your money"]}
                description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                appFeatures={["Magni Veniam", "Praesentium", "Eligendi Molestias"]}
                cardImage={FeatureStatistics}
            />

            <FeatureCard
                subtitle="Saving Accounts"
                title={["Lorem et", "ipsum dolor"]}
                description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                appFeatures={["Ppsa Quis", "Sit Amet Consectetur", "Maiores Sint Modi"]}
                cardImage={FeatureSavings}
            />
        </div>
    );
}
