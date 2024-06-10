import { Icon } from "@iconify/react/dist/iconify.js";

export function ProductCard() {
    return (
        <div className="inline-flex items-center gap-4 p-4 rounded-lg bg-white">
            <span className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary">
                <Icon icon="ic:baseline-apple" width="34" height="34" color="white" />
            </span>

            <div>
                <h3 className="text-lg font-medium">
                    Apple
                </h3>

                <p className="font-medium text-muted opacity-50">
                    Macbook
                </p>
            </div>

            <p className="ml-44 text-lg font-medium">
                -999€
            </p>
        </div>


        // <div>
        //     <Icon className="text-white" icon="ic:baseline-apple" />
        //     <Icon className="text-white" icon="ri:amazon-fill" />
        //     <Icon className="text-white" icon="pajamas:twitter" />
        //     <Icon className="text-white" icon="mdi:microsoft" />
        //     <Icon className="text-white" icon="mdi:dropbox" />
        //     <Icon className="text-white" icon="ic:baseline-paypal" />
        // </div>
    );
}