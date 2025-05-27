import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function About() {
    return (
        <section className="bg-[#FDF6ec] py-16">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative" data-aos="fade-right" data-aos-duration="1000">
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                                src={about1Img}
                                alt="foto do cachorro"
                                fill
                                quality={100}
                                className="object-cover hover:scale-110 duration-300"
                                priority
                            />
                        </div>
                        <div
                            className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                        >
                            <Image
                                src={about2Img}
                                alt="foto do gato"
                                fill
                                quality={100}
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    <div className="space-y-6 mt-10" data-aos="fade-left" data-aos-duration="1000">
                        <h2 className="text-4xl font-bold" data-aos="fade-up" data-aos-delay="100">SOBRE</h2>

                        <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="300">
                            Somos apaixonados por animais e dedicados a oferecer o melhor cuidado para o seu pet. Nossa equipe é formada por profissionais experientes e apaixonados, prontos para atender às necessidades do seu amigo de quatro patas.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="400">
                                <Check className="text-yellow-500" />
                                <span className="text-lg">Atendimento personalizado para cada animal</span>
                            </li>
                            <li className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="500">
                                <Check className="text-yellow-500" />
                                <span className="text-lg">Ambiente seguro e acolhedor</span>
                            </li>
                            <li className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="600">
                                <Check className="text-yellow-500" />
                                <span className="text-lg">Profissionais qualificados e apaixonados por animais</span>
                            </li>
                        </ul>

                        <div className="flex gap-2" data-aos="fade-up" data-aos-delay="700">
                            <a
                                target="_blank"
                                href={`https://wa.me/99984612190?text=Olá, vi no site sobre os serviços e gostaria de mais informações.`}
                                className="bg-amber-600 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                            >
                                <WhatsappLogoIcon className="w-5 h-5 text-white" />
                                Contato via Whatsapp
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                            >
                                Endereço da loja
                                <MapPin className="w-5 h-5 text-black" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
