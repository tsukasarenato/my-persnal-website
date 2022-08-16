
import { NextPage } from "next"

const Footer: NextPage = () => {
    return (
        <div className="grid grid-rows-2 grid-flow-col bg-blue-600 absolute inset-x-0 bottom-0 text-white font-medium h-28">
            <div className="flex justify-center mt-2">
                <h1>My social medias &#128522;</h1>
            </div>
            <div className="flex justify-center space-x-4">
                <a href="https://www.facebook.com/tsukasarenato" target="_blank" className="fa fa-facebook bg-blue-700 hover:bg-opacity-75 p-2 mb-2 rounded-full w-8 h-8 text-center"></a>
                <a href="https://www.instagram.com/tsukasarenato/" target="_blank" className="fa fa-instagram bg-orange-500 hover:bg-opacity-75 p-2 mb-2 rounded-full w-8 h-8 text-center"></a>
                <a href="https://twitter.com/tsukasarenato" target="_blank" className="fa fa-twitter bg-cyan-500 hover:bg-opacity-75 p-2 mb-2 rounded-full w-8 h-8 text-center"></a>
                <a href="https://www.linkedin.com/in/tsukasarenato2" target="_blank" className="fa fa-linkedin bg-sky-500 hover:bg-opacity-75 p-2 mb-2 rounded-full w-8 h-8 text-center"></a>
                <a href="https://www.pinterest.com/tsukasarenato/" target="_blank" className="fa fa-pinterest bg-red-500 hover:bg-opacity-75 p-2 mb-2 rounded-full w-8 h-8 text-center"></a>
            </div>
            <div className="flex justify-center mt-2">
                <h1>My portfolio &#9749;</h1> 
            </div>
            <div className="flex justify-center space-x-4">
                <a href="https://www.youtube.com/channel/UConynubYxdt4Doo60Zm-TKw" target="_blank" className="fa fa-youtube bg-red-500 hover:bg-opacity-75 p-2 mb-2 rounded-full w-8 h-8 text-center"></a>
                <a href="https://github.com/tsukasarenato" target="_blank" className="fa fa-github bg-black hover:bg-opacity-75 p-2 mb-2 rounded-full w-8 h-8 text-center"></a>
            </div>
            <div className="container row-span-2 mt-2">
                <div className="flex justify-center mb-2">
                    <h1>Contact me &#129303;</h1>
                </div>
                <div className="flex justify-center mb-2">
                    <i className="material-icons">mail</i>
                    <p className="ml-2">tsukasa.renato@gmail.com</p>
                </div>
                <a href="https://api.WhatsApp.com/send?phone=5514997468186" target="_blank" className="flex justify-center">
                    <i className="fa fa-whatsapp bg-green-500 hover:bg-opacity-75 p-2 mb-2 rounded-full w-8 h-8 text-center"></i>
                    <p className="ml-2">14 997468186</p>
                </a>
            </div>
        </div>
    )
}

export default Footer