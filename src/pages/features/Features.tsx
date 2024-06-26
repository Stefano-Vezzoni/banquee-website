import { Header } from "../../components/Header";
import { Hero } from "./components/Hero";
import { Transactions } from "./components/Transactions";

export function Features() {
    return (
        <div className="text-xl font-medium">
            <Header />

            <Hero />

            <Transactions />
        </div>
    );
}
