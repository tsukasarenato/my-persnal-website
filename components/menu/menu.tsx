import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useMobileMenu } from "../../utils/breakpoints"
import { getMenuLabels } from "../../utils/language"
import LaptopMenu from "./laptop"
import { MenuProps } from "./links"
import MobileMenu from "./mobile"

export type CurrentPage = {
    page: string,
}

export type MenuPropsArray = {
    menus: MenuProps[],
    languages: MenuProps[]
}

const Menu = ({page}: CurrentPage) => {

    const [mobile, setMobile] = useState<boolean>(false)

    const handleResize = () => {
        setMobile(useMobileMenu())
    }

    useEffect(() => {
        setMobile(useMobileMenu())
        window.addEventListener('resize', handleResize)
    }, [])

    const { locale } = useRouter()
    const labels = getMenuLabels(locale)

    const menus = labels.map(label => (
        {label: label.name, page: label.page, clicked: page==label.page, locale: locale}
    ))

    const languages = [
        {label: "English", page: page, clicked: locale=='en', locale: 'en'},
        {label: "Português", page: page, clicked: locale=='pt', locale: 'pt'},
    ]

    return (
        <>
        { mobile ?
            <MobileMenu menus={menus} languages={languages} />
            :
            <LaptopMenu menus={menus} languages={languages} />
        }
        </>
    )

}

export default Menu