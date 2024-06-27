import { ReactNode } from "react";

interface IAllInOneCard {
    title: string[];
    subtitle: string;
    children: ReactNode;
}

export function AllInOneCard({ title, subtitle, children }: IAllInOneCard) {
    return (
        <div className="flex flex-col gap-14 rounded-[20px] bg-mutedBg pt-14">
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

            <div className="mt-16">{children}</div>
        </div>
    );
}
