import { FooterProps } from "./footer"

 const SocialMedias = ({ titles }: FooterProps) => {
    return (
        <>
            <div className="flex justify-center mt-2">
                <h1>{titles} &#128522;</h1>
            </div>
            <div className="flex justify-center space-x-4">
                <a href="https://www.facebook.com/tsukasarenato" target="_blank" rel="noreferrer" className="fa fa-facebook bg-blue-700 hover:bg-opacity-75 p-2 mb-2 rounded-full w-8 h-8 text-center"></a>
                <a href="https://www.instagram.com/tsukasarenato/" target="_blank" rel="noreferrer" className="fa fa-instagram bg-orange-500 hover:bg-opacity-75 p-2 mb-2 rounded-full w-8 h-8 text-center"></a>
                <a href="https://twitter.com/tsukasarenato" target="_blank" rel="noreferrer" className="fa fa-twitter bg-cyan-500 hover:bg-opacity-75 p-2 mb-2 rounded-full w-8 h-8 text-center"></a>
                <a href="https://www.linkedin.com/in/tsukasarenato2" target="_blank" rel="noreferrer" className="fa fa-linkedin bg-sky-500 hover:bg-opacity-75 p-2 mb-2 rounded-full w-8 h-8 text-center"></a>
                <a href="https://www.pinterest.com/tsukasarenato/" target="_blank" rel="noreferrer" className="fa fa-pinterest bg-red-500 hover:bg-opacity-75 p-2 mb-2 rounded-full w-8 h-8 text-center"></a>
            </div>    
        </>
    )
}

export default SocialMedias