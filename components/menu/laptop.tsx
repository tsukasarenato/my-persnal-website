import MenuLinks from "./links"
import { MenuPropsArray } from "./menu"

const LaptopMenu = ({menus, languages}: MenuPropsArray) => {

    return (
        <div className="grid grid-cols-2 gap-4 bg-blue-500">
            
            <div className="flex justify-start">
                {menus.map((value) => (    
                    <MenuLinks {...value} key={value.label} />
                ))}
            </div>
            
            <div className="flex justify-end">
                {languages.map((value) => (
                    <MenuLinks {...value} key={value.label} />
                ))}
            </div>
            
        </div>
    )
}

export default LaptopMenu