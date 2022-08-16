
import { NextPage } from "next"
import Contact from "./contact"
import Portfolio from "./portfolio"
import SocialMedias from "./socialmedias"

const MobileFooter: NextPage = () => {

    return (
        <div className="grid grid-rows-6 grid-flow-row bg-blue-600 absolute inset-x-0 bottom-0 text-white font-medium">
            <SocialMedias />
            <Portfolio />
            <div className="container row-span-2 mt-2">
                <Contact />
            </div>
        </div>
    )

}

export default MobileFooter