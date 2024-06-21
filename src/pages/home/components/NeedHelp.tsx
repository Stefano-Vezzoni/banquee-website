import { Icon } from "@iconify/react/dist/iconify.js";
import { TextIconInline } from "../../../components/TextIconInline";
import { QuestionButton } from "../../../components/QuestionButton";

export function NeedHelp() {
    return (
        <div className="grid grid-cols-2">
            <div className="flex flex-col gap-12 text-lg">
                <h2 className="text-6xl">Need help?</h2>

                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center justify-center rounded-full bg-primaryLight p-3">
                            <Icon className="h-7 w-7 text-primary" icon="ri:phone-fill" />
                        </span>

                        <span>
                            <p>+49 176 123 456</p>
                            <p className="text-sm text-muted opacity-50">Support Hotline</p>
                        </span>
                    </div>

                    <div className="flex items-center gap-6">
                        <span className="flex items-center justify-center rounded-full bg-primaryLight p-3">
                            <Icon className="h-7 w-7 text-primary" icon="ri:mail-unread-line" />
                        </span>

                        <span>
                            <p>help@banquee.com</p>
                            <p className="text-sm text-muted opacity-50">Support Email</p>
                        </span>
                    </div>
                </div>

                <TextIconInline name="Support" />
            </div>

            <div className="flex flex-col gap-8 text-xl">
                <QuestionButton
                    question="How do I open an Banquee account?"
                    answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vero consectetur dicta vel, minus eaque quidem iusto maiores delectus, tempore sunt id ducimus aspernatur nemo laudantium rem, reprehenderit sit deserunt."
                />
                <QuestionButton
                    question="How do I order a new card?"
                    answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente laudantium illum doloribus id tenetur. Quis expedita exercitationem ullam suscipit amet deleniti mollitia repudiandae provident laudantium nam, magni praesentium neque? Consequuntur."
                />
                <QuestionButton
                    question="How to change my account limits?"
                    answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat porro id soluta laborum. Laboriosam magnam esse, voluptatum deserunt, nobis quae quia, voluptatem numquam aut et officiis delectus ex sunt provident."
                />
                <QuestionButton
                    question="How does Banquee premium works?"
                    answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro in perspiciatis quasi culpa corrupti sint ipsum, veritatis labore inventore molestias tempore nulla aspernatur corporis saepe, libero sapiente voluptates, sunt dolore."
                />
                <QuestionButton
                    question="Can I have two Banquee accounts?"
                    answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, id. Rerum tenetur odit eaque, corporis quaerat minus alias eius nemo dicta cum non recusandae ipsam voluptatum harum! Labore, dignissimos maiores."
                />
            </div>
        </div>
    );
}
