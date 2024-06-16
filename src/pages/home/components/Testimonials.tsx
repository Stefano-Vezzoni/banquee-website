import { Icon } from "@iconify/react/dist/iconify.js";
import { TestimonialCard } from "../../../components/TestimonialCard";

export function Testimonials() {
    //MODIFICAR AS FORMATAÇÕES DE FONT E TEXT PRA DEIXAR MENOR CODIGO DESNECSSÁRIO
    //MODIFICAR AS FORMATAÇÕES DE FONT E TEXT PRA DEIXAR MENOR CODIGO DESNECSSÁRIO
    //MODIFICAR AS FORMATAÇÕES DE FONT E TEXT PRA DEIXAR MENOR CODIGO DESNECSSÁRIO
    //MODIFICAR AS FORMATAÇÕES DE FONT E TEXT PRA DEIXAR MENOR CODIGO DESNECSSÁRIO
    //MODIFICAR AS FORMATAÇÕES DE FONT E TEXT PRA DEIXAR MENOR CODIGO DESNECSSÁRIO
    //MODIFICAR AS FORMATAÇÕES DE FONT E TEXT PRA DEIXAR MENOR CODIGO DESNECSSÁRIO
    //MODIFICAR AS FORMATAÇÕES DE FONT E TEXT PRA DEIXAR MENOR CODIGO DESNECSSÁRIO
    //MODIFICAR AS FORMATAÇÕES DE FONT E TEXT PRA DEIXAR MENOR CODIGO DESNECSSÁRIO
    //MODIFICAR AS FORMATAÇÕES DE FONT E TEXT PRA DEIXAR MENOR CODIGO DESNECSSÁRIO
    //MODIFICAR AS FORMATAÇÕES DE FONT E TEXT PRA DEIXAR MENOR CODIGO DESNECSSÁRIO
    //MODIFICAR AS FORMATAÇÕES DE FONT E TEXT PRA DEIXAR MENOR CODIGO DESNECSSÁRIO
    return (
        <div className="text-xl font-medium">
            <div className="flex justify-between">
                <div className="max-w-[600px]">
                    <p>
                        Testimonials
                    </p>

                    <h2 className="text-6xl mt-4">
                        People all over the world use banquee.
                    </h2>
                </div>


                <span className="flex items-end">
                    <p className="flex items-center">
                        <span className="flex items-center justify-center bg-primaryLight p-2 rounded-full mr-4">
                            <Icon className="text-primary w-6 h-6" icon="material-symbols:star" />
                        </span>
                        Rated <span className="mx-1 text-primary">4.8/5</span> from over 1000 users
                    </p>
                </span>
            </div>

            <div className="flex mt-16 gap-8">
                <div className="flex flex-col gap-8">
                    <TestimonialCard
                        title="Sunt qui esse pariatur duis deserunt mollit"
                        description="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
                        author="Cody Fisher"
                        jobTitle="Medical Assistant"
                    />

                    <TestimonialCard
                        title="Sunt qui esse pariatur duis deserunt mollit"
                        description="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi."
                        author="Bobby Fischer"
                        jobTitle="Chess Grandmaster"
                    />
                </div>

                <div className="flex flex-col gap-8">
                    <TestimonialCard
                        title="At lectus urna duis convallis tellus"
                        description={
                            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.
                            [skip]
                            In nibh mauris cursus mattis. At lectus urna duis convallis convallis tellus. Enim blandit volutpat maecenas volutpat.`
                        }
                        author="Jenny Wilson"
                        jobTitle="Nursing Assistant"
                    />

                    <TestimonialCard
                        title="Donec et fringilla neque"
                        description="Etiam accumsan porta neque in viverra. Proin eleifend, eros in tristique hendrerit, nisi purus cursus sapien, id ultrices nunc tellus a ipsum. Donec et fringilla neque. Aenean consequat purus quis lectus maximus fermentum."
                        author="Darlene Robertson"
                        jobTitle="Dog Trainer"
                    />
                </div>

                <div className="flex flex-col gap-8">
                    <TestimonialCard
                        title="Elit aute irure tempor cupidatat incididunt"
                        description="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi."
                        author="Guy Hawkins"
                        jobTitle="President of Sales"
                    />

                    <TestimonialCard
                        title="Etiam accumsan porta neque eros"
                        description="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
                        author="Dianne Russell"
                        jobTitle="Medical Assistant"
                    />
                </div>
            </div>
        </div>
    );
}