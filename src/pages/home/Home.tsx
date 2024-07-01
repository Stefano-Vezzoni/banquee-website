import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Blog } from "./components/Blog";
import { Hero } from "./components/Hero";
import { NeedHelp } from "../../components/NeedHelp";
import { OneApp } from "./components/OneApp";
import { SavingAccounts } from "./components/SavingAccounts";
import { Account } from "./components/Account";
import { Tools } from "./components/Tools";
import { SendAndReceive } from "./components/SendAndReceive";
import { Notifications } from "./components/Notifications";
import { Testimonials } from "./components/Testimonials";
import { OneAppSecond } from "../../components/OneAppSecond";

export function Home() {
    return (
        <div className="font-medium">
            <Header />

            <div className="relative space-y-40">
                <Hero />

                <OneApp />

                <SendAndReceive />

                <SavingAccounts />

                <Notifications />

                <Tools />

                <Account />

                <Testimonials />

                <OneAppSecond />

                <NeedHelp />

                <Blog />

                <Footer />
            </div>
        </div>
    );
}
