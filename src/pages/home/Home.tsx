import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Blog } from "./components/Blog";
import { Hero } from "./components/Hero";
import { NeedHelp } from "./components/NeedHelp";
import { OneApp } from "./components/OneApp";
import { OneAppSecond } from "./components/OneAppSecond";
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

            <div className="relative mx-36 flex flex-col gap-40">
                <Hero />

                <OneApp />

                <SendAndReceive />

                <OrganizeYourMoney />

                <StayNotified />

                <SeemlessInt />

                <PerfectCard />

                <Testimonials />

                <OneAppSecond />

                <NeedHelp />

                <Blog />

                <Footer />
            </div>
        </div>
    );
}
