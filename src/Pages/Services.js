import { useState, useEffect } from "react"
import { Element } from "react-scroll"
import ServicesNavigation from "../Elements/ServicesNavigation";
//images
import slide1 from '../Assets/Services/slide1.png'
import slide2 from '../Assets/Services/slide2.png'
import ServicesItem from "../Elements/ServicesItem";


export default function Services() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length )
        }, 30000)

        setIntervalId(timer);
        return() => clearInterval(timer)
    }, [])

    useEffect(() => {
        return () => clearInterval(intervalId);
    }, [intervalId]);

    const handleCircleClick = (index) => {
        setCurrentIndex(index)
    }

    const slides = [
    {
        id: 0,
        img : slide1,
        textH: 'Instalação de serviços elétricos',
        textP: 'Realizamos instalações elétricas completas, desde o cabeamento até a\
                instalação de painéis elétricos, disjuntores, tomadas e interruptores'
    },
    {
        id: 1,
        img : slide2,
        textH: 'Instalação e Iluminação',
        textP: 'Iluminando seus espaços com perfeição. Nossa equipe experiente cuida de todas as etapas para\
                criar ambientes luminosos e aconchegantes. Deixe-nos tornar sua visão luminosa em realidade!'
    },
    {
        id: 2,
        img : slide1,
        textH: 'Reparos Elétricos',
        textP: 'Expertise em soluções rápidas e seguras. Sua rede elétrica em boas mãos,\
                garantindo sua tranquilidade. Conte conosco!'
    },
    {
        id: 3,
        img : slide2,
        textH: 'Atualização e Modernização',
        textP: 'Renovando sua infraestrutura com tecnologia de ponta. Conte com nossos serviços\
                especializados para tornar seu sistema elétrico mais eficiente e atualizado.'
    },
    {
        id: 4,
        img : slide2,
        textH: 'Manutenção elétrica preventiva',
        textP: 'Realizamos inspeções regulares e manutenção preventiva para garantir o\
                funcionamento seguro e eficiente do sistema elétrico.'
    },
    {
        id: 5,
        img : slide2,
        textH: 'Manutenção elétrica preventiva',
        textP: 'Garanta a tranquilidade do seu lar com nossos serviços de manutenção elétrica. Nossa equipe experiente cuida de todas as necessidades elétricas,\
                proporcionando um ambiente seguro e funcional para você e sua família'
    }
]

    return(
    <Element name='services'>
        <div className="relative h-[100vh]">
            <div className="absolute inset-0 bg-[url('./Assets/ServicesBG.png')] bg-cover h-[100vh] filter brightness-50"></div>
             <div className="filter brightness-100">
                <div className="relative z-10 flex justify-center pt-[16vh]">
                    <h1 className="text-white text-5xl font-hFont font-[700]">Tipos de serviços que fazemos</h1>
                </div>
                <div className="flex justify-evenly mt-[60px]">
                {slides.slice(currentIndex, currentIndex + 2).map((item, index) => (
                <ServicesItem
                 key={item.id}
                 content={
                        <div className={`flex flex-col items-center`}>
                            <img className="filter brightness-100 rounded" src={item.img} alt={`Slide ${index}`} />
                            <h2 className="text-[#ffe23b] font-hFont font-[700] text-2xl text-center">{item.textH}</h2>
                            <p className="w-[420px] text-white text-lg text-center">{item.textP}</p>
                        </div>
                 }
                 isActive={index === 0}>
                </ServicesItem>
                ))}
                </div>
                    <div className="flex flex-col mt-[15%]">
                        <ServicesNavigation
                            itemCount={slides.length}
                            currentIndex={currentIndex}
                            handleClick={handleCircleClick}
                        />
                    </div>
             </div>
            </div>
    </Element>
    )
}