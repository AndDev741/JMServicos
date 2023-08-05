import { useEffect, useState } from "react"
import { Element } from "react-scroll"
//images
import icon from '../Assets/icon.png'
import whatsIcon from '../Assets/whatsIcon.png'

export default function Home() {
    const [phrase, setPhrase] = useState([
        "Soluções elétricas especializadas para Goiânia e região ",
        "Iluminando Goiânia com serviços elétricos especializados ",
        "Confiabilidade e expertise em serviços elétricos ",
        "Potencializando sua energia em Goiânia com serviços elétricos "
    ])
    const [index, setIndex] = useState(0)
    const [CurrentPhrase, setCurrentPhrase] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [typingSpeed, setTypingSpeed] = useState(100)

    useEffect(() => {
        const type = () => {
            const currentWord = phrase[index]
            setCurrentPhrase((prevPhrase) => {
                if (!isDeleting && prevPhrase === currentWord) {
                    setIsDeleting(true)
                    return prevPhrase
                } else if (isDeleting && prevPhrase === ''){
                    setIsDeleting(false);
                    setIndex((prevIndex) => 
                    prevIndex === phrase.length - 1 ? 0 : prevIndex + 1
                    );
                    return prevPhrase;
                } else if (isDeleting) {
                    return prevPhrase.slice(0, prevPhrase.length - 1);
                } else {
                    return currentWord.slice(0, prevPhrase.length + 1);
                }
            })
        }

        const timer = setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);

        return () => clearTimeout(timer);
    }, [CurrentPhrase, index, isDeleting, phrase, typingSpeed])

    return(
        <div className="bg-[url('./Assets/backgroundIMG.png')] bg-cover ">
            <Element name='home'>
            <div className="flex items-center pt-4 sm:p-8 text-white">
                <img src={icon} />
                <h1 className="text-4xl xs:text-5xl font-hFont font-[700]"><b>JM</b> <br /> Serviços Elétricos</h1>
            </div>
            <div className="w-[80vw] lg:w-[950px] h-[144px] ml-4 mt-3 absolute">
                <span className="font-hFont font-[700] tracking-wide leading-[4rem] text-white text-4xl sm:text-5xl"><b>{CurrentPhrase}</b></span>
            </div>
            <WhatsPopUp/>
            </Element>
        </div>
    )
}

function WhatsPopUp() {

    const today = new Date();
    function getToday(today) {
        return new Intl.DateTimeFormat(
            'pt-BR',
            { weekday: 'long'}
        ).format(today)
    }

    return(
    <div className="flex items-center justify-center md:justify-end pr-4 pt-[350px] sm:pt-[250px] lg:pt-[5%] pb-[5%]">
        <div className="w-[90vw] sm:w-[450px] sm:h-[460px] md:w-[350px] md:h-[360px] rounded-[10px]">
            <div className="h-[73px] bg-[#3ACD49] rounded-t-[10px] text-white font-pFont">
                <div className="flex items-center relative text-sm sm:text-xl sm:text-[16px]">
                    <img src={whatsIcon} />
                    <p className="mb-3">
                        Whatsapp - Marcilon Eletricista <span className=" absolute text-sm sm:text-lg sm:text-sm left-[83px] bottom-[10px] sm:bottom-[18px]">
                            Online agora - {getToday(today)}</span></p>
                </div>
            </div>
            <div className="h-[330px] sm:h-[320px] md:h-[287px] bg-white rounded-b-[10px] font-pFont">
                <div className="flex items-center pt-4">
                    <img src={whatsIcon} />
                    <div className="flex items-center w-[50vw] h-[60px] text-[16px] sm:w-[170px] sm:h-[60px] sm:text-xl md:text-[16px] md:w-[146px] md:h-[47px] rounded-[12px] bg-[#D9D9D9]">
                        <p className="ml-4">Olá tudo bem?  </p>
                    </div>
                 </div>
                 <div className="flex flex-col items-center ml-[80px] w-[65vw] text-[16px] h-[200px] sm:w-[288px] sm:h-[190px] sm:text-xl md:text-[16px] md:w-[248px] md:h-[170px] rounded-[12px] bg-[#D9D9D9]">
                        <p className="m-3">Entre em contato comigo por Whatsapp!</p>
                        <a href="https://wa.me/556294246306?text=Olá,%20gostaria%20De%20Fazer%20Um%20Orçamento" target='_blank'>
                        <button className="w-[163px] py-2 rounded-[15px] bg-[#3acd49] text-white mr-[10vw] sm:mr-[65px] hover:bg-[#32aa3e]">
                        Iniciar Conversa</button></a>
                        <p className="m-3">Vamos fazer um orçamento?</p>
                </div>
            </div>
        </div>
    </div>
    )
}