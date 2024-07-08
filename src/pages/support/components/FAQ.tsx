import { Icon } from "@iconify/react/dist/iconify.js";
import { QuestionButton } from "../../../components/QuestionButton";

export function FAQ() {
    return (
        <div className="mx-52 mb-40 flex gap-32">
            <div className="flex h-full min-w-64 max-w-72 flex-col gap-8 bg-mutedBg py-8 pl-8 pr-24 text-base text-muted">
                <h2 className="text-lg text-black">Categories</h2>

                <div className="flex flex-col gap-4 opacity-50">
                    <a href="#cards">Cards</a>
                    <a href="#account">Account</a>
                    <a href="#personalDetails">Personal Details</a>
                </div>
            </div>

            <div className="flex w-full flex-col gap-24">
                <div className="flex flex-col gap-8">
                    <section id="cards" className="mb-8 flex items-center gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primaryLight">
                            <Icon
                                className="h-7 w-7 text-primary"
                                icon={"ri:secure-payment-fill"}
                            />
                        </span>
                        <p className="text-[28px]">Cards</p>
                    </section>

                    <QuestionButton
                        question="How to setup my card?"
                        answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, neque. Sapiente consequuntur id harum sint in. Nobis, nihil, molestias asperiores vero magnam porro velit neque voluptas qui est vel aliquam."
                    />

                    <QuestionButton
                        question="How do I create a virtual card?"
                        answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, neque. Sapiente consequuntur id harum sint in. Nobis, nihil, molestias asperiores vero magnam porro velit neque voluptas qui est vel aliquam."
                    />

                    <QuestionButton
                        question="How to order an extra card?"
                        answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, neque. Sapiente consequuntur id harum sint in. Nobis, nihil, molestias asperiores vero magnam porro velit neque voluptas qui est vel aliquam."
                    />

                    <QuestionButton
                        question="My card will exprise soon. What to do?"
                        answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, neque. Sapiente consequuntur id harum sint in. Nobis, nihil, molestias asperiores vero magnam porro velit neque voluptas qui est vel aliquam."
                    />

                    <QuestionButton
                        question="How do I freeze my card?"
                        answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, neque. Sapiente consequuntur id harum sint in. Nobis, nihil, molestias asperiores vero magnam porro velit neque voluptas qui est vel aliquam."
                    />
                </div>

                <div className="flex w-full flex-col gap-8">
                    <section id="account" className="mb-8 flex items-center gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primaryLight">
                            <Icon
                                className="h-7 w-7 text-primary"
                                icon={"ri:secure-payment-fill"}
                            />
                        </span>
                        <p className="text-[28px]">Account</p>
                    </section>

                    <QuestionButton
                        question="How do I verify my account?"
                        answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, neque. Sapiente consequuntur id harum sint in. Nobis, nihil, molestias asperiores vero magnam porro velit neque voluptas qui est vel aliquam."
                    />

                    <QuestionButton
                        question="How to upgrade my account?"
                        answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, neque. Sapiente consequuntur id harum sint in. Nobis, nihil, molestias asperiores vero magnam porro velit neque voluptas qui est vel aliquam."
                    />

                    <QuestionButton
                        question="Can I have multiple accounts?"
                        answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, neque. Sapiente consequuntur id harum sint in. Nobis, nihil, molestias asperiores vero magnam porro velit neque voluptas qui est vel aliquam."
                    />

                    <QuestionButton
                        question="How do I cancel my account?"
                        answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, neque. Sapiente consequuntur id harum sint in. Nobis, nihil, molestias asperiores vero magnam porro velit neque voluptas qui est vel aliquam."
                    />
                </div>

                <div className="flex w-full flex-col gap-8">
                    <section id="personalDetails" className="mb-8 flex items-center gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primaryLight">
                            <Icon
                                className="h-7 w-7 text-primary"
                                icon={"ri:secure-payment-fill"}
                            />
                        </span>
                        <p className="text-[28px]">Personal Details</p>
                    </section>

                    <QuestionButton
                        question="How do I change my account address?"
                        answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, neque. Sapiente consequuntur id harum sint in. Nobis, nihil, molestias asperiores vero magnam porro velit neque voluptas qui est vel aliquam."
                    />

                    <QuestionButton
                        question="How to close my account?"
                        answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, neque. Sapiente consequuntur id harum sint in. Nobis, nihil, molestias asperiores vero magnam porro velit neque voluptas qui est vel aliquam."
                    />

                    <QuestionButton
                        question="Where do I find my tax ID?"
                        answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, neque. Sapiente consequuntur id harum sint in. Nobis, nihil, molestias asperiores vero magnam porro velit neque voluptas qui est vel aliquam."
                    />

                    <QuestionButton
                        question="How can I download my bank documents?"
                        answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, neque. Sapiente consequuntur id harum sint in. Nobis, nihil, molestias asperiores vero magnam porro velit neque voluptas qui est vel aliquam."
                    />
                </div>
            </div>
        </div>
    );
}
