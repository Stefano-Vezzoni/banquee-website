import { IconTextInline } from "../../../components/IconTextInline";
import { ProductCard } from "../../../components/ProductCard";
import { TextIconInline } from "../../../components/TextIconInline";

export function Notifications() {
    return (
        <div className="mx-40 flex gap-40">
            <div className="max-w-[540px]">
                <p className="text-xl">Notifications</p>

                <h2 className="mt-2 text-6xl">Stay notified</h2>

                <p className="mt-4 text-lg">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                    officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                    nostrud amet.
                </p>

                <div className="mt-8">
                    <IconTextInline
                        text="Malesuada Ipsum"
                        bgColor="bg-primaryLight"
                        iconColor="primary"
                    />
                    <IconTextInline
                        text="Vestibulum"
                        bgColor="bg-primaryLight"
                        iconColor="primary"
                    />
                    <IconTextInline
                        text="Parturient Lorem"
                        bgColor="bg-primaryLight"
                        iconColor="primary"
                    />
                </div>

                <div className="mt-12">
                    <TextIconInline name="Compare Cards" />
                </div>
            </div>

            <div className="-mt-8 space-y-4">
                <ProductCard
                    title="Banko."
                    subtitle="You payment of 49€ has been processed!"
                    bgColor="bg-[#F8F8F8]"
                />
                <ProductCard
                    title="Banko."
                    subtitle="You got a new support message!"
                    bgColor="bg-[#F8F8F8]"
                />
                <ProductCard
                    title="Banko."
                    subtitle="You payment was declined!"
                    bgColor="bg-[#F8F8F8]"
                />
                <ProductCard
                    title="Banko."
                    subtitle="Please verify your payment of 99€!"
                    bgColor="bg-[#F8F8F8]"
                />
                <ProductCard
                    title="Banko."
                    subtitle="New account statistics are available!"
                    bgColor="bg-[#F8F8F8]"
                />
            </div>
        </div>
    );
}
