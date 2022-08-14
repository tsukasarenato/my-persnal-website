import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { isMobile } from "../../utils/breakpoints"
import { getMenuLabels } from "../../utils/language"
import MenuLaptop from "./laptop"
import { MenuProps } from "./links"
import MenuMobile from "./mobile"

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
        setMobile(isMobile())
    }

    useEffect(() => {
        setMobile(isMobile())
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
            <MenuMobile menus={menus} languages={languages} />
            :
            <MenuLaptop menus={menus} languages={languages} />
        }
        </>
    )

}

export default Menu