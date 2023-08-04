import { FaInstagram } from 'react-icons/fa'
export default function Footer(){
    return(
        <>
            <div className="flex items-center justify-evenly font-pFont bg-[#463A3A] h-[20vh]">
                <div className='flex flex-col items-center'>
                    <p className='text-center text-white'>Nosso email: jmservicos1617@gmail.com</p>
                    <p className='text-center text-white'>Nosso número: 62994246306</p>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-center text-white ">Sigam-nos no Instagram</h2>
                    <a href='https://www.instagram.com/jmservicoseletricos_17/' target='_blank'>
                    <FaInstagram className='text-[40px] text-yellow-500 cursor-pointer'/></a> 
                </div>
                <div>
                    <h2 className="text-center text-white hidden sm:block">Website feito por André Luiz - Web Developer <br />
                        Veja o meu Portfolio</h2>
                </div>
            </div>
        </>
    )
}