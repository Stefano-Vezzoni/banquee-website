import { CardPlans } from "../../../components/CardPlans";
import CardGreen from "../../../assets/CardGreen.svg";
import CardBlack from "../../../assets/CardBlack.svg";
import CardBeige from "../../../assets/CardBeige.svg";
import { CompareTableGridElement } from "./CompareTableGridElement";
import { CheckBadge } from "./CheckBadge";

export function CompareGrid() {
    return (
        <div className="mx-28 grid grid-cols-4 gap-x-10">
            {/* ROW 1 */}
            <div></div>
            <div>
                <CardPlans
                    isPopular
                    title="Basic"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    cardImage={CardGreen}
                />
            </div>
            <div>
                <CardPlans
                    title="Premium"
                    price="5"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    cardImage={CardBlack}
                />
            </div>
            <div>
                <CardPlans
                    title="Gold"
                    price="10"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    cardImage={CardBeige}
                />
            </div>

            {/* ROW 2 */}
            <div className="mb-5 mt-24">Credit Card</div>
            <div></div>
            <div></div>
            <div></div>

            {/* ROW 3 */}
            <div className="-mr-10 border-t py-8 pr-10">
                <CompareTableGridElement
                    name="Physical Card"
                    description="Diam in vh cursus euismod"
                    icon="ri:bank-card-2-line"
                />
            </div>
            <div className="-mr-10 flex items-center justify-center border-t py-8 pr-10">-</div>
            <div className="-mr-10 flex items-center justify-center border-t py-8 pr-10">
                <CheckBadge />
            </div>
            <div className="flex items-center justify-center border-t py-8">
                <CheckBadge />
            </div>

            {/* ROW 4 */}
            <div className="-mr-10 border-t py-8 pr-10">
                <CompareTableGridElement
                    name="Virtual Card"
                    description="Diam in arcu cursus euismod"
                    icon="ri:refund-line"
                />
            </div>
            <div className="-mr-10 flex items-center justify-center border-t py-8 pr-10">-</div>
            <div className="-mr-10 flex items-center justify-center border-t py-8 pr-10">
                <p className="text-base">Up to 2</p>
            </div>
            <div className="flex items-center justify-center border-t py-8">
                <p className="text-base">Unlimited</p>
            </div>

            {/* ROW 5 */}
            <div className="-mr-10 border-t py-8 pr-10">
                <CompareTableGridElement
                    name="Contactless Payments"
                    description="Diam in arcu cursus euismod"
                    icon="ri:wifi-line"
                />
            </div>
            <div className="-mr-10 flex items-center justify-center border-t py-8 pr-10">
                <CheckBadge />
            </div>
            <div className="-mr-10 flex items-center justify-center border-t py-8 pr-10">
                <CheckBadge />
            </div>
            <div className="flex items-center justify-center border-t py-8">
                <CheckBadge />
            </div>

            {/* ROW 6 */}
            <div className="-mr-10 border-t py-8 pr-10">
                <CompareTableGridElement
                    name="Mobile Payments"
                    description="Diam in arcu cursus euismod"
                    icon="ri:money-euro-circle-line"
                />
            </div>
            <div className="-mr-10 flex items-center justify-center border-t py-8 pr-10">
                <CheckBadge />
            </div>
            <div className="-mr-10 flex items-center justify-center border-t py-8 pr-10">
                <CheckBadge />
            </div>
            <div className="flex items-center justify-center border-t py-8">
                <CheckBadge />
            </div>

            {/* ROW 7 */}
            <div className="mb-5 mt-24">Bank Account</div>
            <div></div>
            <div></div>
            <div></div>

            {/* ROW 8 */}
            <div className="-mr-10 border-t py-8 pr-10">
                <CompareTableGridElement
                    name="Free Payments Worldwide"
                    description="Diam in arcu cursus euismod"
                    icon="ri:global-line"
                />
            </div>
            <div className="-mr-10 flex items-center justify-center border-t py-8 pr-10">-</div>
            <div className="-mr-10 flex items-center justify-center border-t py-8 pr-10">
                <CheckBadge />
            </div>
            <div className="flex items-center justify-center border-t py-8">
                <CheckBadge />
            </div>

            {/* ROW 9 */}
            <div className="-mr-10 border-t py-8 pr-10">
                <CompareTableGridElement
                    name="Free ATM withdrawls"
                    description="Diam in arcu cursus euismod"
                    icon="ri:bank-line"
                />
            </div>
            <div className="-mr-10 flex items-center justify-center border-t py-8 pr-10">
                <p className="text-base">2</p>
            </div>
            <div className="-mr-10 flex items-center justify-center border-t py-8 pr-10">
                <p className="text-base">5</p>
            </div>
            <div className="flex items-center justify-center border-t py-8">
                <p className="text-base">10</p>
            </div>

            {/* ROW 10 */}
            <div className="-mr-10 border-t py-8 pr-10">
                <CompareTableGridElement
                    name="Mobile Banking"
                    description="Diam in arcu cursus euismod"
                    icon="ri:smartphone-line"
                />
            </div>
            <div className="-mr-10 flex items-center justify-center border-t py-8 pr-10">
                <CheckBadge />
            </div>
            <div className="-mr-10 flex items-center justify-center border-t py-8 pr-10">
                <CheckBadge />
            </div>
            <div className="flex items-center justify-center border-t py-8">
                <CheckBadge />
            </div>

            {/* ROW 11 */}
            <div className="mb-5 mt-24">Extra Features</div>
            <div></div>
            <div></div>
            <div></div>

            {/* ROW 12 */}
            <div className="-mr-10 border-t py-8 pr-10">
                <CompareTableGridElement
                    name="Saving Accounts"
                    description="Diam in arcu cursus euismod"
                    icon="ri:smartphone-line"
                />
            </div>
            <div className="-mr-10 flex items-center justify-center border-t py-8 pr-10">
                <p className="text-base">2</p>
            </div>
            <div className="-mr-10 flex items-center justify-center border-t py-8 pr-10">
                <p className="text-base">5</p>
            </div>
            <div className="flex items-center justify-center border-t py-8">
                <p className="text-base">Unlimited</p>
            </div>

            {/* ROW 13 */}
            <div className="-mr-10 border-t py-8 pr-10">
                <CompareTableGridElement
                    name="Advanced Statistics"
                    description="Diam in arcu cursus euismod"
                    icon="ri:smartphone-line"
                />
            </div>
            <div className="-mr-10 flex items-center justify-center border-t py-8 pr-10">
                <CheckBadge />
            </div>
            <div className="-mr-10 flex items-center justify-center border-t py-8 pr-10">
                <CheckBadge />
            </div>
            <div className="flex items-center justify-center border-t py-8">
                <CheckBadge />
            </div>

            {/* ROW 14 */}
            <div className="-mr-10 border-t py-8 pr-10">
                <CompareTableGridElement
                    name="Premium Parnter Offers"
                    description="Diam in arcu cursus euismod"
                    icon="ri:smartphone-line"
                />
            </div>
            <div className="-mr-10 flex items-center justify-center border-t py-8 pr-10">
                <CheckBadge />
            </div>
            <div className="-mr-10 flex items-center justify-center border-t py-8 pr-10">
                <CheckBadge />
            </div>
            <div className="flex items-center justify-center border-t py-8">
                <CheckBadge />
            </div>
        </div>
    );
}
