'use client'

import useEmblaCarousel from 'embla-carousel-react'
import {
    ChevronLeft,
    ChevronRight,
    Scissors,
    Syringe,
    CarTaxiFront,
    Hotel,
    Clock
} from 'lucide-react'
import { WhatsappLogoIcon } from '@phosphor-icons/react'

const services = [
    {
        title: 'Banho & Tosa',
        description:
            'Cuidamos da higiene e beleza do seu pet com produtos especiais, corte de unhas, limpeza das orelhas e tosa personalizada — tudo com carinho e segurança.',
        duration: '1h',
        price: 'R$50',
        icon: <Scissors />,
        linkText: 'Olá, vi no site sobre Banho e Tosa e gostaria de mais informações.'
    },
    {
        title: 'Consulta Veterinária',
        description:
            'Seu pet com saúde em dia! Fazemos consultas clínicas e aplicação de vacinas com cuidado e atenção, seja para um check-up ou quando ele não estiver bem.',
        duration: '1h',
        price: 'R$45',
        icon: <Syringe />,
        linkText: 'Olá, vi no site sobre Consulta Veterinária e gostaria de mais informações.'
    },
    {
        title: 'Táxi Pet',
        description:
            'Leve e traga seu pet com conforto e segurança! Ideal para quem tem a rotina apertada e precisa de uma ajudinha para levá-lo ao petshop ou clínica.',
        duration: '2h',
        price: 'R$80',
        icon: <CarTaxiFront />,
        linkText: 'Olá, vi no site sobre Táxi Pet e gostaria de mais informações.'
    },
    {
        title: 'Hotel para Pets',
        description:
            'Vai viajar? Deixe seu pet em um ambiente seguro, aconchegante e com muito carinho. Hospedagem com supervisão e bem-estar garantido.',
        duration: '1h',
        price: 'R$60',
        icon: <Hotel />,
        linkText: 'Olá, vi no site sobre Hotel para pets e gostaria de mais informações.'
    }
]

export function Services() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        skipSnaps: false,
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 640px)': {
                slidesToScroll: 2
            },
            '(min-width: 1024px)': {
                slidesToScroll: 3
            }
        }
    })

    function scrollPrev() {
        emblaApi?.scrollPrev()
    }

    function scrollNext() {
        emblaApi?.scrollNext()
    }

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div>
                    <h2 className="text-4xl font-bold mb-12">SERVIÇOS</h2>

                    <div className="relative">
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex">
                                {services.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_calc(100%/3)] px-3"
                                    >
                                        <article
                                            data-aos="fade-up"
                                            data-aos-delay={index * 100}
                                            className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col"
                                        >
                                            <div className="flex-1 flex items-start justify-between">
                                                <div className="flex gap-3">
                                                    <span className="text-3xl">{item.icon}</span>
                                                    <div>
                                                        <h3 className="font-bold text-xl my-2">{item.title}</h3>
                                                        <p className="text-gray-400 text-sm select-none">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-t border-gray-700 pt-4 mt-4 flex items-center justify-between">
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{item.duration}</span>
                                                </div>

                                                <a
                                                    target="_blank"
                                                    href={`https://wa.me/99984612190?text=${encodeURIComponent(item.title)}`}
                                                    className="flex items-center justify-center gap-2 hover:bg-amber-600 transition-colors duration-200 bg-[#22c55e] text-white rounded-lg px-4 py-2 text-sm"
                                                >
                                                    <WhatsappLogoIcon className="w-5 h-5" />
                                                    Entrar em contato
                                                </a>
                                            </div>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={scrollPrev}
                            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-600" />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
