import { ReactNode } from "react";

interface IAllInOneCard {
    title: string[];
    subtitle: string;
    image?: string;
    children?: ReactNode;
}

export function AllInOneCard({ title, subtitle, image, children }: IAllInOneCard) {
    return (
        <div className="flex h-[515px] flex-col gap-14 overflow-hidden rounded-[20px] bg-mutedBg pt-14">
            <div className="px-14">
                {title.length > 1 ? (
                    <>
                        <h3 className="text-4xl">{title[0]}</h3>
                        <h3 className="text-4xl">{title[1]}</h3>
                    </>
                ) : (
                    <h3 className="text-4xl">{title[0]}</h3>
                )}
                <p className="mt-2 text-lg text-muted opacity-50">{subtitle}</p>
            </div>

            {children && <div className="flex justify-center overflow-hidden">{children}</div>}

            {image && (
                <div className="mt-16 flex justify-center">
                    <img src={image} className="object-cover" />
                </div>
            )}
        </div>
    );
}
