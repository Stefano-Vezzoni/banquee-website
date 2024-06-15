import { CompanyLogo } from "../../../components/CompanyLogo";
import AmazonLogo from "../../../assets/companyLogos/AmazonLogo.svg"
import ApplePayLogo from "../../../assets/companyLogos/ApplePayLogo.svg"
import BitcoinLogo from "../../../assets/companyLogos/BitcoinLogo.svg"
import GooglePayLogo from "../../../assets/companyLogos/GooglePayLogo.svg"
import MastercardLogo from "../../../assets/companyLogos/MastercardLogo.svg"
import PaypalLogo from "../../../assets/companyLogos/PaypalLogo.svg"
import ShopifyLogo from "../../../assets/companyLogos/ShopifyLogo.svg"
import VisaLogo from "../../../assets/companyLogos/VisaLogo.svg"
import WebflowLogo from "../../../assets/companyLogos/WebflowLogo.svg"
import ZapierLogo from "../../../assets/companyLogos/ZapierLogo.svg"
import { IconTextInline } from "../../../components/IconTextInline";

export function SeemlessInt() {
    return (
        <div className="">
            <div className="space-y-4">
                <div className="flex gap-4">
                    <CompanyLogo src={WebflowLogo} />
                    <CompanyLogo src={ShopifyLogo} />
                    <CompanyLogo src={ZapierLogo} />
                    <CompanyLogo src={BitcoinLogo} />
                </div>
                <div className="flex gap-4">
                    <CompanyLogo src={PaypalLogo} />
                    <CompanyLogo src={MastercardLogo} />
                    <CompanyLogo src={VisaLogo} />
                    <CompanyLogo src={GooglePayLogo} />
                    <CompanyLogo src={ApplePayLogo} />
                    <CompanyLogo src={AmazonLogo} />
                </div>
            </div>

            <div className="flex gap-40 mt-16 pb-40">
                <div className="max-w-[560px]">
                    <p className="text-xl font-medium">
                        Tools
                    </p>

                    <h2 className="mt-2 text-6xl font-medium">
                        Seemless <br /> integration
                    </h2>

                    <p className="mt-4 text-lg font-medium">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    </p>
                </div>

                <div className="flex flex-col justify-end gap-3">
                    <IconTextInline
                        text="Secure and encrypted integration"
                        bgColor="bg-primaryLight"
                        iconColor="primary" />

                    <IconTextInline
                        text="Fully API interface"
                        bgColor="bg-primaryLight"
                        iconColor="primary" />

                    <IconTextInline
                        text="Payments worldwide"
                        bgColor="bg-primaryLight"
                        iconColor="primary" />
                </div>
            </div>

            <hr className="w-full" />
        </div>
    );
}