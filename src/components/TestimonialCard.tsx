import { Icon } from "@iconify/react/dist/iconify.js";

interface ITestimonialCard {
    title: string;
    description: string;
    author: string;
    jobTitle: string;
}

export function TestimonialCard({ title, description, author, jobTitle }: ITestimonialCard) {
    const markerStartIndex = description.indexOf('[skip]');
    const markerEndIndex = markerStartIndex + '[skip]'.length - 1;


    function beforeSkip() {
        return description.substring(0, markerStartIndex);
    }

    function afterSkip() {
        return description.substring(markerEndIndex + 1);
    }

    return (
        <div className="border rounded-lg w-96 h-min p-8">
            <span className="flex gap-1 text-primary">
                <Icon icon="material-symbols:star" />
                <Icon icon="material-symbols:star" />
                <Icon icon="material-symbols:star" />
                <Icon icon="material-symbols:star" />
                <Icon icon="material-symbols:star" />
            </span>

            <h3 className="mt-2 text-3xl">
                {title}
            </h3>

            <p className="mt-4 text-base">
                {markerStartIndex != -1 ? (
                    <>
                        {beforeSkip()}
                        <br />
                        <br />
                        {afterSkip()}
                    </>
                ) : (
                    description
                )}
            </p>

            <span>
                <h4 className="mt-6 text-lg">
                    {author}
                </h4>

                <p className="text-sm text-muted opacity-50">
                    {jobTitle}
                </p>
            </span>
        </div>
    );
}