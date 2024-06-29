import { Header } from "../../components/Header";
import { Accounts } from "./components/Accounts";
import { AllInOne } from "./components/AllInOne";
import { Hero } from "./components/Hero";
import { Transactions } from "./components/Transactions";

export function Features() {
    return (
        <div className="text-xl font-medium">
            <Header />

            <Hero />

            <Transactions />

            <AllInOne />

            <Accounts />
        </div>
    );
}
