import { Header } from "../../components/Header";
import { Hero } from "./components/Hero";
import { OneApp } from "./components/OneApp";
import { OrganizeYourMoney } from "./components/OrganizeYourMoney";
import { PerfectCard } from "./components/PerfectCard";
import { SeemlessInt } from "./components/SeemlessInt";
import { SendAndReceive } from "./components/SendAndReceive";
import { StayNotified } from "./components/StayNotified";
import { Testimonials } from "./components/Testimonials";

export function Home() {
    return (
        <div className="font-medium">
            <Header />

            <div className="relative flex flex-col gap-40 mx-36">
                <Hero />

                <OneApp />

                <SendAndReceive />

                <OrganizeYourMoney />

                <StayNotified />

                <SeemlessInt />

                <PerfectCard />

                <Testimonials />
            </div>

        </div >
    );
}