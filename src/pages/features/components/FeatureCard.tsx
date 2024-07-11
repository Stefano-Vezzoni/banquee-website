import { IconTextInline } from "../../../components/IconTextInline";

interface IFeatureCard {
    subtitle: string;
    title: string[];
    description: string;
    appFeatures: string[];
    cardImage: string;
}

export function FeatureCard({
    subtitle,
    title,
    description,
    appFeatures,
    cardImage,
}: IFeatureCard) {
    //fazer verificação do array ter 3 nomes
    return (
        <div className="flex items-center justify-between">
            <div className="pb-32">
                <h2 className="mt-10 text-6xl">
                    <p className="text-xl">{subtitle}</p>
                    <p className="mt-2">{title[0]}</p>

                    <p className="-mt-1">{title[1]}</p>
                </h2>

                <p className="mt-4 max-w-[560px] text-xl">{description}</p>

                <div className="mt-8 space-y-3">
                    <IconTextInline
                        text={appFeatures[0]}
                        bgColor="bg-primaryLight"
                        iconColor="primary"
                    />
                    <IconTextInline
                        text={appFeatures[1]}
                        bgColor="bg-primaryLight"
                        iconColor="primary"
                    />
                    <IconTextInline
                        text={appFeatures[2]}
                        bgColor="bg-primaryLight"
                        iconColor="primary"
                    />
                </div>
            </div>

            <img src={cardImage} />
        </div>
    );
}
