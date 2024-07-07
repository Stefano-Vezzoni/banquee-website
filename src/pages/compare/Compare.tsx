import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { CompareGrid } from "./components/CompareGrid";
import { Hero } from "./components/Hero";
import { StillHaveQuestions } from "../../components/StillHaveQuestions";

export function Compare() {
    return (
        <div className="text-xl font-medium">
            <Header />

            <div className="space-y-24">
                <Hero />

                <CompareGrid />

                <StillHaveQuestions />

                <Footer />
            </div>
        </div>
    );
}
