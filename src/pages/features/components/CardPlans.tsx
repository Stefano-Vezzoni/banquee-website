interface ICardPlans {
    isPopular?: boolean;
    title: string;
    price?: string;
    description: string;
    cardImage: string;
}

export function CardPlans({ isPopular = false, title, price, description, cardImage }: ICardPlans) {
    return (
        <div className="max-w-[356px]">
            <div className="flex flex-col items-center justify-center">
                <p className="">
                    {title}{" "}
                    {isPopular && (
                        <span className="rounded-[4px] bg-primaryLight px-1 text-xs text-primary">
                            Popular
                        </span>
                    )}
                </p>

                {price ? (
                    <h2 className="mt-6 text-[40px] font-bold">
                        ${price} <span className="text-base text-muted opacity-50">per month</span>
                    </h2>
                ) : (
                    <h2 className="mb-1 mt-6 text-[40px] font-bold">Free</h2>
                )}

                <p className="mt-2 w-56 text-center text-base text-muted opacity-50">
                    {description}
                </p>
            </div>

            <div className="mt-6">
                <img src={cardImage} />

                <button className="mt-6 w-full rounded-md bg-primary py-2 text-sm text-white">
                    Get Started
                </button>
            </div>
        </div>
    );
}
