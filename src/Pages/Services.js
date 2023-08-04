import { useState, useEffect } from "react"
import { Element } from "react-scroll"
import ServicesNavigation from "../Elements/ServicesNavigation";
import ServicesItem from "../Elements/ServicesItem";
//images
import slide1 from '../Assets/Services/slide1.png'
import slide2 from '../Assets/Services/slide2.png'
import slide3 from '../Assets/Services/slide3.jpeg'
import slide4 from '../Assets/Services/slide4.jpeg'
import slide8 from '../Assets/Services/slide8.jpeg'
import iluminação from '../Assets/Projects/img4.jpeg'
import reparos from '../Assets/Projects/img15.jpeg'



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
        img : iluminação,
        textH: 'Instalação e Iluminação',
        textP: 'Iluminando seus espaços com perfeição. Nossa equipe experiente cuida de todas as etapas para\
                criar ambientes luminosos e aconchegantes. Deixe-nos tornar sua visão luminosa em realidade!'
    },
    {
        id: 2,
        img : reparos,
        textH: 'Reparos Elétricos',
        textP: 'Expertise em soluções rápidas e seguras. Sua rede elétrica em boas mãos,\
                garantindo sua tranquilidade. Conte conosco!'
    },
    {
        id: 3,
        img : slide8,
        textH: 'Atualização e Modernização',
        textP: 'Renovando sua infraestrutura com tecnologia de ponta. Conte com nossos serviços\
                especializados para tornar seu sistema elétrico mais eficiente e atualizado.'
    },
    {
        id: 4,
        img : slide4,
        textH: 'Manutenção elétrica preventiva',
        textP: 'Realizamos inspeções regulares e manutenção preventiva para garantir o\
                funcionamento seguro e eficiente do sistema elétrico.'
    },
    {
        id: 5,
        img : slide3,
        textH: 'Manutenção Elétrica Residencial',
        textP: 'Nossa equipe experiente cuida de todas as necessidades elétricas,\
                proporcionando um ambiente seguro e funcional para você e sua família'
    }
]

    return(
    <Element name='services'>
        <div className="relative pb-[5%]">
            <div className="absolute inset-0 bg-[url('./Assets/ServicesBG.png')] bg-cover filter brightness-50"></div>
             <div className="filter brightness-100">
                <div className="relative z-10 flex justify-center pt-[16vh]">
                    <h1 className="text-white text-5xl font-hFont text-center font-[700]">Tipos de serviços que fazemos</h1>
                </div>
                <div className="flex flex-col md:flex-row justify-evenly mt-[60px]">
                {slides.slice(currentIndex, currentIndex + 2).map((item, index) => (
                <ServicesItem
                 key={item.id}
                 content={
                        <div className={`flex flex-col items-center`}>
                            <img className="filter brightness-100 rounded w-[80vw] h-[260px] md:w-[400px] md:h-[262px] border-2 border-solid border-yellow-500"
                             src={item.img} alt={`Slide ${index}`} />
                            <h2 className="text-[#ffe23b] font-hFont font-[700] text-2xl text-center">{item.textH}</h2>
                            <p className="w-[70vw] mb-8 md2:mb-0 md:w-[400px] text-white text-lg text-center">{item.textP}</p>
                        </div>
                 }
                 isActive={index === 0}>
                </ServicesItem>
                ))}
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