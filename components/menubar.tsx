import { getLocale, getMenuLabels } from "../utils/language"
import Menu from "./menu"

export type CurrentPage = {
    page: string,
}

export type MenuProps = {
    label: string,
    page: string,
    active: string,
    locale: string,
}

const MenuBar = ({page}: CurrentPage) => {

    const language = getLocale()
    const menuLabels = getMenuLabels(language)

    const menus: MenuProps[] = menuLabels.map(menu => (
        {label: menu.name, page: menu.page, active: page, locale: language}
    ))

    const languages: MenuProps[] = [
        {label: "English", page: page, active: language, locale: 'en'},
        {label: "Português", page: page, active: language, locale: 'pt'},
    ]

    return (
        <div className="grid grid-cols-2 gap-4 bg-blue-500">
            <div className="flex justify-start">
                {menus.map((value) => (    
                    <Menu {...value} key={value.label} />
                ))}
            </div>
            
            <div className="flex justify-end">
                {languages.map((value) => (
                    <Menu {...value} key={value.label} />
                ))}
            </div>
            
        </div>
    )
}

export default MenuBar