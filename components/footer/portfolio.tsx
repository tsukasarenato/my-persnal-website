import { FooterProps } from "./footer"

 const Portfolio = ({ titles }: FooterProps) => {
    return (
        <>
            <div className="flex justify-center mt-2">
                <h1>{titles} &#9749;</h1> 
            </div>
            <div className="flex justify-center space-x-4">
                <a href="https://www.youtube.com/channel/UConynubYxdt4Doo60Zm-TKw" target="_blank" className="fa fa-youtube bg-red-500 hover:bg-opacity-75 p-2 mb-2 rounded-full w-8 h-8 text-center"></a>
                <a href="https://github.com/tsukasarenato" target="_blank" className="fa fa-github bg-black hover:bg-opacity-75 p-2 mb-2 rounded-full w-8 h-8 text-center"></a>
            </div>   
        </>
    )
}

export default Portfolio