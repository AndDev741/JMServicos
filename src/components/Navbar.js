import {Link, Element} from 'react-scroll'
import { FaGripLines, FaHome, FaUserAlt, FaTools, FaToolbox, FaEnvelope } from 'react-icons/fa'
import { useState} from 'react'

export default function Navbar() {
        const [active, setActive] = useState(false)

        function handleMenu() {
                if (active === false) {
                setActive(true)
                } else {
                    setActive(false)
                }
        }

    return(
        <div>
            <nav className="hidden md:block fixed right-1 text-white font-pFont mt-8 z-50">
                    <Link 
                    to='home' 
                    spy={true} 
                    smooth='on' 
                    activeClass='text-yellow-500 
                    underline'
                    className={`mx-6 cursor-pointer`}>Início</Link>
                    <Link 
                    to='about' 
                    spy={true} 
                    smooth='on' 
                    activeClass='text-yellow-500 underline'
                    className={`mx-6 cursor-pointer `}>
                    Sobre a JM</Link>
                    <Link 
                    to='services'
                    spy={true} 
                    smooth='on' 
                    activeClass='text-yellow-500 underline'
                    className="mx-6 cursor-pointer">
                    Serviços</Link>
                    <Link 
                    to='projects'
                    spy={true}
                    smooth='on'
                    activeClass='text-yellow-500 underline'
                    className="mx-6 cursor-pointer">
                    Projetos</Link>
                    <Link 
                    to='contact'
                    smooth='on'
                    spy={true}
                    activeClass='text-yellow-500 underline'
                    className="mx-6 cursor-pointer">
                    Contato</Link>
                </nav>
                <div className='block md:hidden fixed right-0 text-4xl text-white font-pFont mt-5 z-50 cursor-pointer mx-3'>
                    <FaGripLines
                    onClick={handleMenu}
                    className=' '/> 
                </div>
                <nav className={`fixed right-0 text-4xl font-pFont mt-12 z-50 text-white
                ${active === false ? 'hidden' : 'block'}`}>
                    <Link 
                    to='home' 
                    spy={true} 
                    smooth='on' 
                    activeClass='text-yellow-500 
                    underline'
                    className={`mx-3  cursor-pointer`}><FaHome className='' /></Link>
                    <Link 
                    to='about' 
                    spy={true} 
                    smooth='on' 
                    activeClass='mx-3 text-yellow-500 underline'
                    className={`cursor-pointer `}><FaUserAlt /></Link>
                    <Link 
                    to='services'
                    spy={true} 
                    smooth='on' 
                    activeClass='text-yellow-500 underline'
                    className="mx-3 cursor-pointer"><FaTools /></Link>
                    <Link 
                    to='projects'
                    spy={true}
                    smooth='on'
                    activeClass='text-yellow-500 underline'
                    className="mx-3 cursor-pointer"><FaToolbox /></Link>
                    <Link 
                    to='contact'
                    smooth='on'
                    spy={true}
                    activeClass='text-yellow-500 underline'
                    className="mx-3 cursor-pointer"><FaEnvelope /></Link>
                </nav>
        </div>
    )
}