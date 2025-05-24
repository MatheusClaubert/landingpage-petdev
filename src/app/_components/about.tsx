import Image from "next/image";
import about1Img  from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
export function About() {
    return (
        <section className="bg-[#FDF6ec] py-16">
           <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> 
            <div className="relative">
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
                <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
                    <Image
                        src={about2Img}
                        alt="foto do gato"
                        fill
                        quality={100}
                        className="object-cover "
                        priority
                    />
                </div>
                    
            </div>

            <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Sobre</h2>
                <p className="text-lg mb-6">
                    Somos apaixonados por animais e dedicados a oferecer o melhor cuidado para o seu pet. Nossa equipe é formada por profissionais experientes e apaixonados, prontos para atender às necessidades do seu amigo de quatro patas.
                </p>
                <p className="text-lg mb-6">
                    Oferecemos uma variedade de serviços, desde banho e tosa até hospedagem e adestramento. Tudo para garantir que seu pet receba o carinho e a atenção que merece.
                </p>
                
            </div>

           </div>
        </section>
    );
}