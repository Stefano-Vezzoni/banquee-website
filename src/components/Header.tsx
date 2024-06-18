import { Icon } from "@iconify/react";
import { OpenAccount } from "./OpenAccount";

export function Header() {
    //Diminuir a imagem do hero
    //Diminuir a imagem do hero
    //Diminuir a imagem do hero
    //Diminuir a imagem do hero
    //Diminuir a imagem do hero
    //Diminuir a imagem do hero
    //Diminuir a imagem do hero
    //Diminuir a imagem do hero
    //Diminuir a imagem do hero
    //Diminuir a imagem do hero
    return (
        <div className="my-6 flex items-center justify-center font-medium">
            <div>
                {/* Colocar função de voltar para a home */}
                <button className="text-3xl font-bold text-primary hover:text-teal-600">
                    banquee.
                </button>
            </div>

            <div className="ml-64 mr-56 flex gap-4">
                <button className="inline-flex rounded-md p-2 hover:bg-slate-50">Features</button>

                <button className="inline-flex rounded-md p-2 hover:bg-slate-50">
                    Compare
                    <Icon icon="ri:arrow-drop-down-line" width="24" height="24" />
                </button>

                <button className="inline-flex rounded-md p-2 hover:bg-slate-50">Support</button>

                <button className="inline-flex rounded-md p-2 hover:bg-slate-50">
                    Blog
                    <Icon icon="ri:arrow-drop-down-line" width="24" height="24" />
                </button>
            </div>

            <div className="space-x-8">
                <button className="text-lg text-primary hover:text-teal-600">Login</button>

                <OpenAccount />
            </div>
        </div>
    );
}
