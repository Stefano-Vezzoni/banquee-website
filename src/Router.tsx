import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Features } from "./pages/features/Features";
import { Compare } from "./pages/compare/Compare";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/compare" element={<Compare />} />
        </Routes>
    );
}
