import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useMobileFooter } from "../../utils/breakpoints"
import { getFooterLabels } from "../../utils/translator"
import LaptopFooter from "./laptop"
import MobileFooter from "./mobile"

export type FooterProps = {
    titles: string[] | string
}

const Footer = () => {

    const [mobile, setMobile] = useState(false)

    const handleResize = () => {
        setMobile(useMobileFooter())
    }

    useEffect(() => {
        setMobile(useMobileFooter())
        window.addEventListener('resize', handleResize)
    },[])

    const { locale } = useRouter()
    const labels = getFooterLabels(locale)

    return (
        <>
        { mobile ?
            <MobileFooter titles={labels} />
          :
            <LaptopFooter titles={labels} />
        }
        </>
    )
}

export default Footer