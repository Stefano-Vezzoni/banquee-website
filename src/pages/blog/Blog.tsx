import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Articles } from "./components/Articles";

export function Blog() {
    return (
        <div className="text-lg font-medium">
            <Header />

            <div>
                <h1 className="py-24 text-center text-8xl">Blog</h1>

                <Articles />
            </div>

            <Footer />
        </div>
    );
}
