import { AllInOneCard } from "./AllInOneCard";
import AllInOneCards from "../../../assets/AllInOneCards.svg";

export function AllInOne() {
    //Ajustar as imagens embaixo do componente
    //Ajustar as imagens embaixo do componente
    //Ajustar as imagens embaixo do componente
    //Ajustar as imagens embaixo do componente
    //Ajustar as imagens embaixo do componente
    //Ajustar as imagens embaixo do componente
    //Ajustar as imagens embaixo do componente
    //Ajustar as imagens embaixo do componente
    //Ajustar as imagens embaixo do componente
    //Ajustar as imagens embaixo do componente
    return (
        <div className="mx-40 mt-80">
            <div className="text-center">
                <h2 className="text-6xl">All in one bank. Really.</h2>
                <p>
                    Senectus et netus et malesuada fames ac turpis.
                    <br />
                    Sagittis vitae et leo duis ut diam.
                </p>
            </div>

            <div className="mt-24 flex flex-col">
                <div className="flex items-center justify-center gap-8 text-center">
                    <AllInOneCard
                        title={["Statistics"]}
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
                        children={
                            <div>
                                <img className="w-full" src={AllInOneCards} />
                            </div>
                        }
                    />

                    <AllInOneCard
                        title={["Cards"]}
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
                        children={
                            <div>
                                <img src={AllInOneCards} />
                            </div>
                        }
                    />
                </div>

                <span className="mt-8 flex gap-8">
                    <AllInOneCard
                        title={["Easy", "integration"]}
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        children={<div></div>}
                    />

                    <AllInOneCard
                        title={["Saving", "accounts"]}
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        children={<div></div>}
                    />

                    <AllInOneCard
                        title={["Instant", "transactions"]}
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        children={<div></div>}
                    />
                </span>
            </div>
        </div>
    );
}
