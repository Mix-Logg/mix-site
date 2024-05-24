import Image from "next/image";
import { PiPackageLight } from "react-icons/pi";
import Motorcycle from '../../assets/svg/motorcycle.svg'
import Car from '../../assets/svg/car.svg'
import Util from '../../assets/svg/util.svg'
import Van from '../../assets/svg/van.svg'
import Truck from '../../assets/svg/truck.svg'
export default function InfoApp(){
    return(
        <section className="flex flex-col gap-7">
            <div className="flex flex-col gap-8">
                <div className="flex gap-5">
                    <div className="md:p-3 md:border md:bg-white rounded-lg flex justify-center items-center ">
                        <Image
                            src={Motorcycle}
                            alt="Carros MIX"
                            // className="hidden md:flex"
                            width={75}
                            height={75}
                        />
                    </div>
                    <div className="flex flex-col justify-between py-1">
                        <h1 className="text-lg font-extrabold text-terciary">
                            Moto
                        </h1>
                        <p className="text-secondary text-sm">
                            Ideal para entregar pacotes pequenos, comidas e documentos
                        </p>
                        <span className="text-xs flex items-center gap-1">
                            <PiPackageLight className="text-base"/> até 20kg
                        </span>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="md:p-3 md:border md:bg-white rounded-lg flex justify-center items-center">
                        <Image
                            src={Car}
                            alt="Carros MIX"
                            // className="hidden md:flex"
                            width={75}
                            height={75}
                        />
                    </div>
                    <div className="flex flex-col justify-between">
                        <h1 className="text-lg font-extrabold text-terciary">
                            Passeio
                        </h1>
                        <p className="text-secondary text-sm">
                            Ideal para entregar pacotes pequenos, eletrônicos em geral
                        </p>
                        <span className="text-xs flex items-center gap-1">
                        <PiPackageLight className="text-base"/> até 200kg
                        </span>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="md:p-3 md:border md:bg-white rounded-lg flex justify-center items-center">
                        <Image
                            src={Util}
                            alt="Carros MIX"
                            // className="hidden md:flex"
                            width={75}
                            height={75}
                        />
                    </div>
                    <div className="flex flex-col justify-between p-1">
                        <h1 className="text-lg font-extrabold text-terciary">Utilitário</h1>
                        <p className="text-secondary text-sm">
                            Ideal para entregar pacotes médios, eletrodomésticos
                        </p>
                        <span className="text-xs flex items-center gap-1"> 
                            <PiPackageLight className="text-base"/> até 500kg
                        </span>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="md:p-3 md:border md:bg-white rounded-lg flex justify-center items-center">
                        <Image
                            src={Van}
                            alt="Carros MIX"
                            // className="hidden md:flex"
                            width={75}
                            height={75}
                        />
                    </div>
                    <div className="flex flex-col justify-between p-1">
                        <h1 className="text-lg font-extrabold text-terciary">Van</h1>
                        <p className="text-secondary text-sm">Ideal para entregar pacotes médios, lava e seca, televisão, fogão</p>
                        <span className="text-xs flex items-center gap-1">
                            <PiPackageLight className="text-base"/> até 1000kg
                        </span>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="md:p-3 md:border md:bg-white rounded-lg flex justify-center items-center">
                        <Image
                            src={Truck}
                            alt="Carros MIX"
                            width={75}
                            height={75}
                        />
                    </div>
                    <div className="flex flex-col justify-between p-1">
                        <h1 className="text-lg font-extrabold text-terciary">Vuc</h1>
                        <p className="text-secondary text-sm">Ideal para entregar pacotes grande, mudanças, geladeira</p>
                        <span className="text-xs flex items-center gap-1">
                            <PiPackageLight className="text-base"/> até 1500kg
                        </span>
                    </div>
                </div>
            </div>
            <p className="text-justify">
                Temos a solução de Fretes que cabe no seu bolso, 
                monitorada  em tempo real. 
                Estamos empenhados em oferecer uma 
                boa experiência dos nossos serviços
            </p>
        </section>
    )
}