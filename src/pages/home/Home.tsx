import { Header } from "../../components/Header";
import { Hero } from "./components/Hero";
import { OneApp } from "./components/OneApp";
import { SendAndReceive } from "./components/SendAndReceive";

export function Home() {
    return (
        <div className="">
            <Header />

            <div className="flex flex-col gap-40">
                <Hero />

                <OneApp />

                <SendAndReceive />
            </div>

        </div>
    );
}