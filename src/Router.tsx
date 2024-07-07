import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Features } from "./pages/features/Features";
import { Compare } from "./pages/compare/Compare";
import { Support } from "./pages/support/Support";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/support" element={<Support />} />
        </Routes>
    );
}
