import { useNavigate } from "react-router-dom";
import { OpenAccount } from "./OpenAccount";

export function Header() {
    const navigate = useNavigate();

    function redirectHomePage() {
        navigate("/");
    }

    function redirectFeaturesPage() {
        navigate("/features");
    }

    function redirectComparePage() {
        navigate("/compare");
    }

    function redirectSupportPage() {
        navigate("/support");
    }

    function redirectBlogPage() {
        navigate("/blog");
    }

    return (
        <div className="my-6 flex items-center justify-center text-base font-medium">
            <div>
                {/* Colocar função de voltar para a home */}
                <button
                    className="text-3xl font-bold text-primary hover:text-teal-600"
                    onClick={redirectHomePage}
                >
                    banquee.
                </button>
            </div>

            <div className="ml-64 mr-56 flex gap-4">
                <button
                    className="inline-flex rounded-md p-2 hover:bg-mutedBg"
                    onClick={redirectFeaturesPage}
                >
                    Features
                </button>

                <button
                    className="inline-flex rounded-md p-2 hover:bg-mutedBg"
                    onClick={redirectComparePage}
                >
                    Compare
                </button>

                <button
                    className="inline-flex rounded-md p-2 hover:bg-mutedBg"
                    onClick={redirectSupportPage}
                >
                    Support
                </button>

                <button
                    className="inline-flex rounded-md p-2 hover:bg-mutedBg"
                    onClick={redirectBlogPage}
                >
                    Blog
                </button>
            </div>

            <div className="space-x-8">
                <button className="text-lg text-primary hover:text-teal-600">Login</button>

                <OpenAccount />
            </div>
        </div>
    );
}
