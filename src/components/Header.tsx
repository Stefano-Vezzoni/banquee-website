import { Icon } from '@iconify/react';
import { OpenAccount } from './OpenAccount';

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
        <div className="flex justify-center items-center my-6">
            <div className="">
                {/* Colocar função de voltar para a home */}
                <button className='text-3xl text-primary font-bold hover:text-teal-600'>
                    banquee.
                </button>
            </div>

            <div className="flex gap-4 ml-64 mr-56">
                <button className="inline-flex font-medium p-2 rounded-md hover:bg-slate-50">
                    Features
                </button>

                <button className="inline-flex font-medium p-2 rounded-md hover:bg-slate-50">
                    Compare
                    <Icon icon="ri:arrow-drop-down-line" width="24" height="24" />
                </button>

                <button className="inline-flex font-medium p-2 rounded-md hover:bg-slate-50">
                    Support
                </button>

                <button className="inline-flex font-medium p-2 rounded-md hover:bg-slate-50">
                    Blog
                    <Icon icon="ri:arrow-drop-down-line" width="24" height="24" />
                </button>
            </div>

            <div className="space-x-8">
                <button className='text-primary text-lg font-medium hover:text-teal-600'>
                    Login
                </button>

                <OpenAccount />
            </div>
        </div>
    );
}