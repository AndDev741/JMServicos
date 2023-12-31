import { Element } from "react-scroll"
import AboutPic from '../Assets/AboutPic.png'
export default function About() {
    return(
        <div className="bg-[#463A3A] text-white">
            <Element name="about">
            <div className="flex flex-col md:flex-row items-center md:justify-evenly">
                <div className="">
                    <img src={AboutPic} className="hidden md:block"/>
                </div>
                <div className="mt-[20%] mb-[20%] md:mt-[10%] md:mb-[10%]">
                    <h1 className="text-6xl text-center mb-8">Sobre <br /> a <b>JM Serviços</b></h1>
                    <div className="flex items-center justify-center">
                    <p className="w-[90vw] md:w-[600px] text-xl text-center font-pFont">Somos uma empresa <b>especializada em serviços elétricos residenciais e comerciais 
                                em Goiânia</b>, oferecendo soluções completas em manutenção, reformas e instalações elétricas. Com uma equipe 
                        <b> experiente e comprometida, garantimos resultados de alta qualidade e segurança</b>. Utilizamos 
                        materiais de primeira linha e seguimos todas as normas e regulamentos do setor para fornecer um 
                        serviço confiável e duradouro. Conte conosco para cuidar de todas as suas necessidades elétricas, 
                        desde pequenos reparos até projetos de grande porte.<b> Sua satisfação é nossa prioridade.</b></p>
                    </div>
                </div>
            </div>
            </Element>
        </div>
    )
}