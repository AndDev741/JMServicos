import { useState } from "react"
import { Element } from "react-scroll"
//images
import imgExemple from '../Assets/imgExemple.png'
import img1 from '../Assets/Projects/img1.jpeg'
import img2 from '../Assets/Projects/img2.jpeg'
import img3 from '../Assets/Projects/img3.jpeg'
import img4 from '../Assets/Projects/img4.jpeg'
import img5 from '../Assets/Projects/img5.jpeg'
import img6 from '../Assets/Projects/img6.jpeg'
import img7 from '../Assets/Projects/img7.jpeg'
import img8 from '../Assets/Projects/img8.jpeg'
import img9 from '../Assets/Projects/img9.jpeg'
import img10 from '../Assets/Projects/img10.jpeg'
import img11 from '../Assets/Projects/img11.jpeg'
import img12 from '../Assets/Projects/img12.jpeg'
import img13 from '../Assets/Projects/img13.jpeg'
import img14 from '../Assets/Projects/img14.jpeg'
import img15 from '../Assets/Projects/img15.jpeg'
import img16 from '../Assets/Projects/img16.jpeg'
import slide6 from '../Assets/Services/slide6.jpeg'

export default function Projects() {
    const [selectedImage, setSelectedImage] = useState(img15)
    const [selectedItem, setSelectedItem] = useState(1)
    const [zoom, setZoom] = useState(false)

    function handleImage(image, index) {
        setSelectedImage(image)
        setSelectedItem(index)
        setZoom(false)
    }

    function handleZoom() {
        setZoom((prevZoom) => !prevZoom)
    }
    
    return(
        <>
        <Element name='projects'>
            <div className="h-[100vh] bg-[#463A3A] text-white">
                
                <h1 className="text-center text-[48px] font-hFont font-[900] pt-[4%]">Projetos ja feitos</h1>
                <p className="text-center text-[20px] text-slate-300 font-pFont ">Clique nos titulos para ver os projetos</p>
                <div className="flex justify-evenly mt-6">
                    <div>
                        <ul className="font-pFont">
                            <li className={`text-3xl list-disc my-8 cursor-pointer 
                            ${selectedItem === 1 ? 'text-yellow-400' : ''}`}
                            onClick={() => handleImage(img15, 1)}>Instalação de sistemas elétricos</li>
                            <li className={`text-3xl list-disc my-8 cursor-pointer 
                            ${selectedItem === 2 ? 'text-yellow-400' : ''}`}
                            onClick={() => handleImage(slide6, 2)}>Manutenção elétrica preventiva</li>
                            <li className={`text-3xl list-disc my-8 cursor-pointer 
                            ${selectedItem === 3 ? 'text-yellow-400' : ''}`}
                            onClick={() => handleImage(img1, 3)}>Reparos elétricos</li>
                            <li className={`text-3xl list-disc my-8 cursor-pointer 
                            ${selectedItem === 4 ? 'text-yellow-400' : ''}`}
                            onClick={() => handleImage(img13, 4)}>Atualização e modernização</li>
                            <li className={`text-3xl list-disc my-8 cursor-pointer 
                            ${selectedItem === 5 ? 'text-yellow-400' : ''}`}
                            onClick={() => handleImage(img12, 5)}>Instalação de iluminação</li>
                        </ul>
                    </div>
                    <div>
                        <img className={`w-[442px] h-[376px] rounded cursor-pointer
                        ${zoom ? 'w-[800px] border-2 border-solid border-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' : ''}`}
                        onClick={handleZoom}
                        src={selectedImage} />
                        <h2 className="text-center text-[23px] text-slate-300 font-pFont">Clique na imagem para vê-la completa</h2>
                    </div>
                </div>
            </div>
            <Clients/>
        </Element>
        </>
    )
}

function Clients() {
    return(
        <div className="bg-stone-300 ">
            <h1 className="text-center text-[30px] font-hFont font-[900] py-4">Algumas de nossas obras de arte</h1>
            <div className="flex justify-evenly flex-wrap">
                <img src={img1}
                 className='w-[380px] hover:scale-110 h-[350px] rounded mx-2 my-3'/>
                <img src={img2}
                 className='w-[380px] hover:scale-110 h-[350px] rounded mx-2 my-3'/>
                <img src={img3}
                 className='w-[380px] hover:scale-110 h-[350px] rounded mx-2 my-3'/>
                
                <img src={img6}
                 className='w-[600px] hover:scale-105 rounded mx-2 my-3'/>
                <img src={img7}
                 className='w-[600px] hover:scale-105 rounded mx-2 my-3'/>

                <img src={img8}
                 className='w-[380px] hover:scale-110 h-[350px] rounded mx-2 my-3'/>
                <img src={img9}
                 className='w-[380px] hover:scale-110 h-[350px] rounded mx-2 my-3'/>
                <img src={img10}
                 className='w-[380px] hover:scale-110 h-[350px] rounded mx-2 my-3'/>

                <img src={img15}
                 className='w-[600px] hover:scale-105 rounded mx-2 my-3'/>
                <img src={img16}
                 className='w-[600px] hover:scale-105 rounded mx-2 my-3'/>
            </div> 
        </div>
    )
}

function allProjects() {
    return(
        <div>

        </div>        
    )
}