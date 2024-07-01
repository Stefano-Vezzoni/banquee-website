import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { NeedHelp } from "../../components/NeedHelp";
import { OneAppSecond } from "../../components/OneAppSecond";
import { Accounts } from "./components/Accounts";
import { AllInOne } from "./components/AllInOne";
import { Hero } from "./components/Hero";
import { Transactions } from "./components/Transactions";

export function Features() {
    return (
        <div className="text-xl font-medium">
            <Header />

            <div className="space-y-40">
                <Hero />

                <Transactions />

                <AllInOne />

                <Accounts />

                <OneAppSecond />

                <NeedHelp />

                <Footer />
            </div>
        </div>
    );
}
