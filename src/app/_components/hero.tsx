import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import dogImg from "../../../public/hero-dog.webp";
import Image from "next/image";
import catImg from "../../../public/cat-hero.png";

export function Hero() {
    return (
        <section className="bg-violet-950 text-white relative overflow-hidden">
            <div>
                <Image
                    src={dogImg}
                    alt="foto do cachorro"
                    fill
                    sizes="100vw"
                    priority
                    className="object-cover opacity-60  sm:hidden "
                    quality={100}
                />
                <div className="absolute inset-0 bg-black opacity-45 md:hidden">

                </div>
            </div>

            <div className="container mx-auto px-4 pt-16 pb-16 md:pb-0 relative">

                <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6" data-aos="fade-up" data-aos-duration="800">
                        <h1
                            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Seu pet merece cuidado, carinho e atenção especial
                        </h1>
                        <p
                            className="lg:text-lg"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            Oferecemos os melhores serviços para garantir o bem-estar e a felicidade do seu amigo de 4 patas
                        </p>

                        <a
                            data-aos="zoom-in"
                            data-aos-delay="500"
                            data-aos-duration="600"
                            target="_blank"
                            href={`https://wa.me/99984612190?text=Olá, vi no site sobre os serviços e gostaria de mais informações.`}
                            className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                        >
                            <WhatsappLogoIcon className="w-5 h-5 " />
                            Contato via Whatsapp
                        </a>

                        <div className="mt-8" data-aos="fade-up" data-aos-delay="700">
                            <p className="text-sm mb-4">
                                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra.
                            </p>
                            <div className="flex mt-4">
                                <div className="w-32 hidden md:block" data-aos="fade-up" data-aos-delay="900">
                                    <Image
                                        src={catImg}
                                        alt="foto do gato"
                                        quality={100}
                                        className="object-fill"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block relative" data-aos="fade-left" data-aos-duration="1000">
                        <Image
                            src={dogImg}
                            alt="foto do cachorro"
                            className="object-contain"
                            fill
                            sizes="(max-width: 768px) 0vw, 50vw "
                            quality={100}
                            priority
                        />
                    </div>
                </article>

            </div>

        </section>
    );
}