import { ProductCard } from "../../../components/ProductCard";
import { IconTextInline } from "../../../components/IconTextInline";

export function SendAndReceive() {
    return (
        <div className="bg-primaryLight pt-20 -mx-36">
            <div className="z-10 flex px-36 gap-32 overflow-hidden">
                <div className="pb-32">
                    <h2 className="mt-10 text-6xl font-medium">
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

                <div className="z-0 flex flex-col gap-4 -mb-7">
                    <ProductCard icon="ic:baseline-apple" title="Apple" subtitle="Macbook" price="999" />
                    <ProductCard icon="ri:amazon-fill" title="Amazon" subtitle="Electronics" price="49" />
                    <ProductCard icon="pajamas:twitter" title="Twitter" subtitle="Ads" price="29" />
                    <ProductCard icon="mdi:microsoft" title="Microsoft" subtitle="Office Suite" price="149" />
                    <ProductCard icon="mdi:dropbox" title="Dropbox" subtitle="Cloud" price="14" />
                    <ProductCard icon="ic:baseline-paypal" title="Paypal" subtitle="Shopping" price="200" />
                </div>
            </div>
        </div>
    );
}