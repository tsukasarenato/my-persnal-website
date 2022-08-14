import { useState } from "react"
import MenuLinks, { MenuProps } from "./links"

type MenuPropsArray = {
    menus: MenuProps[],
    languages: MenuProps[]
}

const MenuMobile = ({menus, languages}: MenuPropsArray) => {

    const [open, setOpen] = useState<boolean>(false)

    const openAndCloseMenu = () => { setOpen(!open) }

    return (
            <div className="grid grid-rows-1 gap-4 bg-blue-500">
            
                <button type="button" className="inline-flex items-center" onClick={openAndCloseMenu}>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-white m-2 h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        { open ?
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        :
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        }
                    </svg>

                </button>

                { open && 
                    <>
                    {menus.map((value) => (    
                        <MenuLinks {...value} key={value.label} />
                    ))}
        
                    {languages.map((value) => (
                        <MenuLinks {...value} key={value.label} />
                    ))}
                    </>
                }
                
            </div>
    )
}

export default MenuMobile