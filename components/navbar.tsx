import NavBarLink from "./navbarlink"
import { NavProps } from "./navbarlink"

export type NavActived = {
    menu: string,
    language: string,
}

const NavBar = ({menu, language}: NavActived) => {

    const menus: NavProps[] = [
        {name: "Home", link: "/", active: menu},
        {name: "About", link: "/about", active: menu},
        {name: "Posts", link: "/posts", active: menu},
    ]

    const languages: NavProps[] = [
        {name: "English", link: "/", active: language},
        {name: "Português", link: "/about", active: language},
    ]

    return (
        <div className="grid grid-cols-2 gap-4 bg-blue-500">
            <div className="flex justify-start">
                {menus.map((value: NavProps) => (    
                    <NavBarLink {...value} key={value.name} />
                ))}
            </div>
            
            <div className="flex justify-end">
                {languages.map((value) => (
                    <NavBarLink {...value} key={value.name} />
                ))}
            </div>
            
        </div>
    )
}

export default NavBar