import {Link, Element} from 'react-scroll'

export default function Navbar() {
    return(
            <nav className="fixed right-1 text-white font-pFont  mt-8 z-50">
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
    )
}