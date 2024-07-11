import { Icon } from "@iconify/react/dist/iconify.js";

interface IQuestionButton {
    question: string;
    answer: string;
}

export function QuestionButton({ question, answer }: IQuestionButton) {
    return (
        <div className="flex flex-col">
            <span className="flex items-center justify-between">
                <p>{question}</p>
                <button>
                    <Icon className="text-primary" icon="ri:add-fill" />
                </button>
            </span>

            <p className="mt-4 hidden text-base text-muted opacity-50">{answer}</p>

            <hr className="mt-8 w-full" />
        </div>
    );
}
