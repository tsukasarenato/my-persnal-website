import Contact from "./contact"
import { FooterProps } from "./footer"
import Portfolio from "./portfolio"
import SocialMedias from "./socialmedias"

const LaptopFooter = ({ titles }: FooterProps) => {

    return (
        <div className="grid grid-rows-2 grid-flow-col bg-blue-600 absolute inset-x-0 bottom-0 text-white font-medium h-28">
            <SocialMedias titles={titles[0]} />
            <Portfolio titles={titles[1]} />
            <div className="container row-span-2 mt-2">
                <Contact titles={titles[2]} />
            </div>
        </div>
    )

}

export default LaptopFooter