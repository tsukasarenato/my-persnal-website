import { FooterProps } from "./footer"

 const Contact = ({ titles }: FooterProps) => {
    return (
        <>
            <div className="flex justify-center mb-2">
                <h1>{titles} &#129303;</h1>
            </div>
            <div className="flex justify-center mb-2">
                <i className="material-icons">mail</i>
                <p className="ml-2">tsukasa.renato@gmail.com</p>
            </div>
            <a href="https://api.WhatsApp.com/send?phone=5514997468186" target="_blank" className="flex justify-center">
                <i className="fa fa-whatsapp bg-green-500 hover:bg-opacity-75 p-2 mb-2 rounded-full w-8 h-8 text-center"></i>
                <p className="ml-2 hover:text-slate-400">14 997468186</p>
            </a>
        </>
    )
}

export default Contact