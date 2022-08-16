
import { NextPage } from "next"
import { useEffect, useState } from "react"
import { useMobileFooter } from "../../utils/breakpoints"
import Contact from "./contact"
import LaptopFooter from "./laptop"
import MobileFooter from "./mobile"
import Portfolio from "./portfolio"
import SocialMedias from "./socialmedias"

const Footer: NextPage = () => {

    const [mobile, setMobile] = useState(false)

    const handleResize = () => {
        setMobile(useMobileFooter())
    }

    useEffect(() => {
        setMobile(useMobileFooter())
        window.addEventListener('resize', handleResize)
    },[])

    return (
        <>
        { mobile ?
            <MobileFooter />
          :
            <LaptopFooter />
        }
        </>
    )
}

export default Footer