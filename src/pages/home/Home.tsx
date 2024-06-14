import { Header } from "../../components/Header";
import { Hero } from "./components/Hero";
import { OneApp } from "./components/OneApp";
import { OrganizeYourMoney } from "./components/OrganizeYourMoney";
import { SeemlessInt } from "./components/SeemlessInt";
import { SendAndReceive } from "./components/SendAndReceive";
import { StayNotified } from "./components/StayNotified";

export function Home() {
    return (
        <div className="">
            <Header />

            <div className="flex flex-col gap-40 mx-36">
                <Hero />

                <OneApp />

                <SendAndReceive />

                <OrganizeYourMoney />

                <StayNotified />

                <SeemlessInt />
            </div>

        </div>
    );
}