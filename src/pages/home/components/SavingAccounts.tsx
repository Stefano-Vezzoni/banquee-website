import { BigProductCard } from "../../../components/BigProductCard";
import { TextIconInline } from "../../../components/TextIconInline";

export function SavingAccounts() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <div className="flex max-w-[600px] flex-col gap-4">
                    <p className="text-xl">Saving Accounts</p>

                    <h2 className="text-6xl">
                        Organize your <br /> money the right way
                    </h2>

                    <p className="text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                <div className="relative mt-12 max-w-[1440px]">
                    <div className="absolute right-0 top-0">
                        <TextIconInline name="All Features" />
                    </div>

                    <div className="mt-12 flex w-full gap-8">
                        <BigProductCard
                            icon="twemoji:laptop"
                            title="New Laptop"
                            price="400"
                            bgColor="bg-laptopBg"
                        />
                        <BigProductCard
                            icon="twemoji:bicycle"
                            title="Dream bike"
                            price="200"
                            bgColor="bg-bicycleBg"
                        />
                        <BigProductCard
                            icon="twemoji:airplane"
                            title="Holiday"
                            price="14000"
                            bgColor="bg-planeBg"
                        />
                        <BigProductCard
                            icon="twemoji:camera-with-flash"
                            title="Camera"
                            price="100"
                            bgColor="bg-cameraBg"
                        />
                        <BigProductCard icon="ei:plus" bgColor="bg-plusBg" />
                    </div>
                </div>
            </div>
        </div>
    );
}
