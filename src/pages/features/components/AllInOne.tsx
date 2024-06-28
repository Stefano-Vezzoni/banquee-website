import { AllInOneCard } from "./AllInOneCard";
import AllInOneCards from "../../../assets/AllInOneCards.svg";
import FeatureStatistics from "../../../assets/FeatureStatistics.svg";
import { CompanyLogo } from "../../../components/CompanyLogo";
import AmazonLogo from "../../../assets/companyLogos/AmazonLogo.svg";
import ApplePayLogo from "../../../assets/companyLogos/ApplePayLogo.svg";
import BitcoinLogo from "../../../assets/companyLogos/BitcoinLogo.svg";
import GooglePayLogo from "../../../assets/companyLogos/GooglePayLogo.svg";
import MastercardLogo from "../../../assets/companyLogos/MastercardLogo.svg";
import PaypalLogo from "../../../assets/companyLogos/PaypalLogo.svg";
import ShopifyLogo from "../../../assets/companyLogos/ShopifyLogo.svg";
import VisaLogo from "../../../assets/companyLogos/VisaLogo.svg";
import WebflowLogo from "../../../assets/companyLogos/WebflowLogo.svg";
import ZapierLogo from "../../../assets/companyLogos/ZapierLogo.svg";
import { Icon } from "@iconify/react/dist/iconify.js";

export function AllInOne() {
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
                        image={FeatureStatistics}
                    />

                    <AllInOneCard
                        title={["Cards"]}
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
                        image={AllInOneCards}
                    />
                </div>

                <span className="mt-8 flex gap-8">
                    <AllInOneCard
                        title={["Easy", "integration"]}
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        children={
                            <div className="space-y-4">
                                <div className="flex w-[395px] justify-center gap-4">
                                    <CompanyLogo src={WebflowLogo} backgroundColor="bg-white" />
                                    <CompanyLogo src={ShopifyLogo} backgroundColor="bg-white" />
                                    <CompanyLogo src={ZapierLogo} backgroundColor="bg-white" />
                                </div>
                                <div className="flex w-[395px] justify-center gap-4">
                                    <CompanyLogo src={PaypalLogo} backgroundColor="bg-white" />
                                    <CompanyLogo src={MastercardLogo} backgroundColor="bg-white" />
                                    <CompanyLogo src={VisaLogo} backgroundColor="bg-white" />
                                    <CompanyLogo src={GooglePayLogo} backgroundColor="bg-white" />
                                </div>
                                <div className="flex w-[395px] justify-center gap-4">
                                    <CompanyLogo src={ApplePayLogo} backgroundColor="bg-white" />
                                    <CompanyLogo src={AmazonLogo} backgroundColor="bg-white" />
                                    <CompanyLogo src={BitcoinLogo} backgroundColor="bg-white" />
                                </div>
                            </div>
                        }
                    />

                    <AllInOneCard
                        title={["Saving", "accounts"]}
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        children={
                            <div className="ml-14 flex gap-6 overflow-hidden">
                                <div className="flex-grow font-medium">
                                    <span className="flex h-36 w-36 items-center justify-center rounded-2xl bg-primaryLight">
                                        <Icon
                                            className="2xl:h-20 2xl:w-20"
                                            icon="twemoji:laptop"
                                            width="64"
                                            height="64"
                                        />
                                    </span>

                                    <h2 className="mt-4 text-xl">New Laptop</h2>

                                    <p className="mt-1 text-sm text-muted opacity-50">400$</p>
                                </div>

                                <div className="flex-grow font-medium">
                                    <span className="flex h-36 w-36 items-center justify-center rounded-2xl bg-bicycleBg">
                                        <Icon
                                            className="2xl:h-20 2xl:w-20"
                                            icon="twemoji:bicycle"
                                            width="72"
                                            height="72"
                                        />
                                    </span>

                                    <h2 className="mt-4 text-xl">New Laptop</h2>

                                    <p className="mt-1 text-sm text-muted opacity-50">400$</p>
                                </div>
                            </div>
                        }
                    />

                    <AllInOneCard
                        title={["Instant", "transactions"]}
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        children={
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between gap-12 rounded-lg bg-white p-4">
                                    <div className="flex items-center justify-center gap-3">
                                        <button className="rounded-lg bg-primary p-3">
                                            <Icon
                                                color="white"
                                                width={28}
                                                height={28}
                                                icon={"ri:apple-fill"}
                                            />
                                        </button>

                                        <span className="">
                                            <h3 className="text-lg">Apple</h3>
                                            <p className="text-base text-muted opacity-50">
                                                Electronic
                                            </p>
                                        </span>
                                    </div>
                                    <p className="mt-1 text-lg">-799$</p>
                                </div>

                                <div className="flex justify-between gap-12 rounded-lg bg-white p-4">
                                    <div className="flex items-center justify-center gap-3">
                                        <button className="rounded-lg bg-primary p-3">
                                            <Icon
                                                color="white"
                                                width={28}
                                                height={28}
                                                icon={"ri:apple-fill"}
                                            />
                                        </button>

                                        <span className="">
                                            <h3 className="text-lg">Amazon</h3>
                                            <p className="text-base text-muted opacity-50">
                                                Shopping
                                            </p>
                                        </span>
                                    </div>
                                    <p className="mt-1 text-lg">-99$</p>
                                </div>

                                <div className="flex justify-between gap-12 rounded-lg bg-white p-4">
                                    <div className="flex items-center justify-center gap-3">
                                        <button className="rounded-lg bg-primary p-3">
                                            <Icon
                                                color="white"
                                                width={28}
                                                height={28}
                                                icon={"ri:apple-fill"}
                                            />
                                        </button>

                                        <span className="">
                                            <h3 className="text-lg">Google</h3>
                                            <p className="text-base text-muted opacity-50">Ads</p>
                                        </span>
                                    </div>
                                    <p className="mt-1 text-lg">-99$</p>
                                </div>
                            </div>
                        }
                    />
                </span>
            </div>
        </div>
    );
}
