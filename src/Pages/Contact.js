import { Element } from "react-scroll"
import { Map, Marker, ZoomControl, twoFingerDragWarning} from "pigeon-maps"
import {useForm, ValidationError} from '@formspree/react'
import { useState } from "react"
export default function Contact() {
    const [state, handleSubmit] = useForm('xvojgyww');
    const [formSubmited, setFormSubmited] = useState(false);
    if(state.succeeded && !formSubmited){
        window.alert('O seu email foi enviado com sucesso! Em breve retornaremos.')
        setFormSubmited(true)
    }

    const handleFormReset = () => {
        setFormSubmited(false)
    }

    return(
    <Element name="contact">
    <div className="relative lg:h-screen">
        <div className="absolute inset-0 bg-[url('./Assets/contactbg.png')] bg-cover lg:h-screen filter brightness-50"></div>
        <div className="flex flex-col lg:flex-row items-center justify-evenly lg:h-[100vh] filter brightness-100">
            <div className="flex flex-col items-center">
                <h2 className="text-white font-[600] mb-6 text-4xl text-center mt-8 lg:mt-0">Entre em contato conosco</h2>
                <div className="flex items-center justify-center w-[95vw] h-[300px] md:w-[700px] md:h-[400px] mb-5 md:mb-0">
                    <Map  defaultCenter={[-16.681808, -49.275472]} defaultZoom={12} metaWheelZoom={true}>
                        <Marker width={50} anchor={[-16.681808, -49.275472]} />
                        <ZoomControl />
                        <twoFingerDragWarning/>
                    </Map>
                </div>
                <h2 className="text-white mb-6 text-3xl text-center ">Atendemos em toda Goiânia e região metropolitana</h2>
            </div>
            <div>
                <form onSubmit={(e) => {
                    handleSubmit(e);
                    handleFormReset();
                }}
                      className="w-[90vw]  md:w-[500px] md:h-[520px] rounded-[12px] bg-white mt-12 mb-12 lg:mb-0">
                    <div className="flex justify-center md:justify-end">
                        <h2 className="font-pFont font-[600] text-[24px] m-3 mr-8 ">Nos mande um email</h2>
                    </div>
                    <div className="font-pFont my-6">
                        <label 
                        htmlFor="name" 
                        className="text-[18px] ml-[30px]">
                        Nome:</label>
                        <br />
                        <input 
                        name="name"
                        className="border-b-2 border-solid border-black w-[80vw] md:w-[420px] ml-[30px] md:mx-[30px]" 
                        type='text' required
                        />
                        <ValidationError
                        prefix="email"
                        field="email"
                        errors={state.errors} />
                    </div>
                    <div className="font-pFont my-6">
                        <label
                        htmlFor="email" 
                        className="text-[18px] ml-[30px]">Email:</label>
                        <br />
                        <input 
                        name="email"
                        className="border-b-2 border-solid border-black w-[80vw] md:w-[420px] ml-[30px] md:mx-[30px]" 
                        type='email' required
                        />
                        <ValidationError
                        prefix="name"
                        field="name"
                        errors={state.errors} />
                    </div>
                    <div className="font-pFont my-6">
                        <label 
                        htmlFor="number"
                        className="text-[18px] ml-[30px]">Celular:</label>
                        <br />
                        <input 
                        name="number"
                        className="border-b-2 border-solid border-black w-[80vw] md:w-[420px] ml-[30px] md:mx-[30px]" 
                        type='text' required
                        />
                        <ValidationError
                        prefix="number"
                        field="number"
                        errors={state.errors} />
                    </div>
                    <div className="font-pFont my-6">
                        <label
                        htmlFor="message" 
                        className="text-[18px] ml-[30px]">
                        Sua mensagem:</label>
                        <br />
                        <div className="flex items-center">
                            <textarea
                            name="message"
                            className="mb-4 md:mb-0 border-2 border-solid border-black w-[300px] max-w-[360px] h-[160px] max-h-[160px] ml-[30px]" 
                            type='text' required
                            />
                            <ValidationError
                            prefix="message"
                            field="message"
                            errors={state.errors} />
                            <button
                            disabled={state.submitting}
                            type="submit" 
                            className="bg-black text-white w-[150px] h-[50px] ml-[10px] mr-3 md:mr-0">Enviar</button>
                            {formSubmited && (
                                <div className="text-[18px] ml-[30px] text-green-500">
                                    O Email foi enviado com sucesso! 
                                </div>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
     </div>
     </Element>
    )
}