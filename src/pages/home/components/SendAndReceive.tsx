import { ProductCard } from "../../../components/ProductCard";
import { IconTextInline } from "../../../components/IconTextInline";

export function SendAndReceive() {
    //Terminar o role
    //Terminar o role
    //Terminar o role
    //Terminar o role
    return (
        <div className="flex justify-center gap-32 bg-primaryLight py-32 -pb-10">
            <div className="">
                <h2 className="text-6xl font-medium">
                    <p>
                        Send & receive
                    </p>

                    <p className="-mt-1">
                        money instantly
                    </p>
                </h2>

                <p className="mt-4 max-w-[560px] text-xl font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                </p>

                <div className="space-y-3 mt-8">
                    <IconTextInline text="Malesuada Ipsum" bgColor="bg-primary" iconColor="white" />
                    <IconTextInline text="Vestibulum" bgColor="bg-primary" iconColor="white" />
                    <IconTextInline text="Parturient Lorem" bgColor="bg-primary" iconColor="white" />
                </div>
            </div>

            <div className="flex flex-col gap-4 -mt-10">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

        </div>
    );
}