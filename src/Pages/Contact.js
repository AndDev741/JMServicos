import { Element } from "react-scroll"
import { Map, Marker, ZoomControl} from "pigeon-maps"
export default function Contact() {
    return(
    <Element name="contact">
    <div className="relative h-[100vh]">
        <div className="absolute inset-0 bg-[url('./Assets/contactbg.png')] bg-cover h-[100vh] filter brightness-50"></div>
        <div className="flex items-center justify-evenly h-[100vh] filter brightness-100">
            <div className="">
                <h1 className="text-white font-[600] mb-6 text-4xl text-center">Entre em contato conosco</h1>
                <Map height={400} width={700} defaultCenter={[-16.681808, -49.275472]} defaultZoom={12} metaWheelZoom={true}>
                    <Marker width={50} anchor={[-16.681808, -49.275472]} />
                    <ZoomControl />
                </Map>
                <h2 className="text-white mb-6 text-3xl text-center">Atendemos em toda Goiânia e região <br /> metropolitana</h2>
            </div>
            <div>
                <form className="w-[500px] h-[520px] rounded-[12px] bg-white mt-12">
                    <div className="flex justify-end">
                        <h2 className="font-pFont font-[600] text-[24px] m-3 mr-8">Nos mande um email</h2>
                    </div>
                    <div className="font-pFont my-6">
                        <label className="text-[18px] ml-[30px]">Nome:</label>
                        <br />
                        <input className="border-b-2 border-solid border-black w-[420px] mx-[30px]" 
                        type='text' required
                        />
                    </div>
                    <div className="font-pFont my-6">
                        <label className="text-[18px] ml-[30px]">Email:</label>
                        <br />
                        <input className="border-b-2 border-solid border-black w-[420px] mx-[30px]" 
                        type='email' required
                        />
                    </div>
                    <div className="font-pFont my-6">
                        <label className="text-[18px] ml-[30px]">Celular:</label>
                        <br />
                        <input className="border-b-2 border-solid border-black w-[420px] mx-[30px]" 
                        type='text' required
                        />
                    </div>
                    <div className="font-pFont my-6">
                        <label className="text-[18px] ml-[30px]">Sua mensagem:</label>
                        <br />
                        <div className="flex items-center">
                            <textarea className="border-2 border-solid border-black w-[300px] max-w-[360px] h-[160px] max-h-[160px] ml-[30px]" 
                            type='text' required
                            />
                            <button type="submit" className="bg-black text-white w-[150px] h-[50px] ml-[10px]">Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     </div>
     </Element>
    )
}