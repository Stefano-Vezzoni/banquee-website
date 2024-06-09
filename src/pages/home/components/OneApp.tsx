import { Icon } from "@iconify/react/dist/iconify.js";
import { OneAppGridElement } from "./OneAppGridElement";
import OneAppImage from "../../../assets/OneAppImage.svg"

export function OneApp() {
    return (
        <div className="flex justify-center items-start space-x-32">
            <div>
                <h1 className="flex flex-col text-mHeading1 leading-tight font-medium">
                    <span>
                        One app.
                    </span>

                    <span className="-mt-4">
                        One banking.
                    </span>
                </h1>

                <div className="mt-16 grid grid-cols-2 gap-8">
                    <OneAppGridElement
                        icon=
                        {<Icon className='w-7 h-7' icon="ri:flashlight-line" />}
                        title="Instant transactions"
                        description="Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
                    />

                    <OneAppGridElement
                        icon=
                        {<Icon className='w-7 h-7' icon="ri:flashlight-line" />}
                        title={`Saving accounts`}
                        description="Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
                    />

                    <OneAppGridElement
                        icon=
                        {<Icon className='w-7 h-7' icon="ri:flashlight-line" />}
                        title="Mobile banking"
                        description="Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
                    />

                    <OneAppGridElement
                        icon=
                        {<Icon className='w-7 h-7' icon="ri:flashlight-line" />}
                        title="Advanced statistics"
                        description="Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
                    />

                    <OneAppGridElement
                        icon=
                        {<Icon className='w-7 h-7' icon="ri:flashlight-line" />}
                        title="Virtual cards"
                        description="Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
                    />

                    <OneAppGridElement
                        icon=
                        {<Icon className='w-7 h-7' icon="ri:flashlight-line" />}
                        title="Contactless payments"
                        description="Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
                    />
                </div>
            </div>

            <img className="" src={OneAppImage} />
        </div>
    );
}