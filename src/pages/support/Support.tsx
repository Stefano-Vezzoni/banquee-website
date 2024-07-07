import { Header } from "../../components/Header";
import { StillHaveQuestions } from "../../components/StillHaveQuestions";
import { Hero } from "./components/Hero";

export function Support() {
    return (
        <div className="text-xl font-medium">
            <Header />

            <Hero />

            <div className="my-24">
                <StillHaveQuestions />
            </div>
        </div>
    );
}
