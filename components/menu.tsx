import Link from "next/link"
import { MenuProps } from "./menubar"

const Menu = ({label, page, active, locale}: MenuProps) => {

    const is_actived = active == page || active == locale
    const bgcolor = is_actived ? "bg-blue-400" : ""

    const changeLanguage = () => {
        window.localStorage.setItem('language', locale)
    }

    return (
        <Link href={page} locale={locale}>
            <a className={" hover:bg-blue-400 " + bgcolor + " p-4 font-sans text-white text-lg font-medium"}
                onClick={changeLanguage}>
                {label}
            </a>
        </Link>
    )
}

export default Menu