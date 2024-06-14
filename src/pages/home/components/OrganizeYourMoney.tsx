import { BigProductCard } from "../../../components/BigProductCard";
import { CompareCards } from "../../../components/CompareCards";

export function OrganizeYourMoney() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <div className="flex flex-col gap-4 max-w-[600px]">
                    <p className="text-xl font-medium">
                        Saving Accounts
                    </p>

                    <h2 className="text-6xl font-medium">
                        Organize your <br /> money the right way
                    </h2>

                    <p className="text-xl font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                <div className="relative mt-12 max-w-[1440px]">
                    <div className="absolute right-0 top-0">
                        <CompareCards name="All Features" />
                    </div>

                    <div className="flex w-full gap-8 mt-12">
                        <BigProductCard icon="twemoji:laptop" title="New Laptop" price="400" bgColor="bg-laptopBg" />
                        <BigProductCard icon="twemoji:bicycle" title="Dream bike" price="200" bgColor="bg-bicycleBg" />
                        <BigProductCard icon="twemoji:airplane" title="Holiday" price="14000" bgColor="bg-planeBg" />
                        <BigProductCard icon="twemoji:camera-with-flash" title="Camera" price="100" bgColor="bg-cameraBg" />
                        <BigProductCard icon="ei:plus" bgColor="bg-plusBg" />
                    </div>
                </div>
            </div>
        </div>

    );
}