import { OneAppGridElement } from "./OneAppGridElement";
import OneAppImage from "../../../assets/OneAppImage.svg";

export function OneApp() {
    return (
        <div className="flex items-start justify-between space-x-32">
            <div>
                <h1 className="flex flex-col text-mHeading1 leading-tight">
                    <span>One app.</span>

                    <span className="-mt-4">One banking.</span>
                </h1>

                <div className="mt-16 grid grid-cols-2 gap-8">
                    <OneAppGridElement
                        icon="ri:flashlight-line"
                        title="Instant transactions"
                        description="Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
                    />

                    <OneAppGridElement
                        icon="ri:safe-2-fill"
                        title={`Saving accounts`}
                        description="Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
                    />

                    <OneAppGridElement
                        icon="ri:smartphone-line"
                        title="Mobile banking"
                        description="Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
                    />

                    <OneAppGridElement
                        icon="ri:line-chart-line"
                        title="Advanced statistics"
                        description="Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
                    />

                    <OneAppGridElement
                        icon="ri:bank-card-2-line"
                        title="Virtual cards"
                        description="Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
                    />

                    <OneAppGridElement
                        icon="ri:wifi-line"
                        title="Contactless payments"
                        description="Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
                    />
                </div>
            </div>

            <img src={OneAppImage} />
        </div>
    );
}
