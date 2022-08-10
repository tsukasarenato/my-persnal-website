import Link from "next/link"

export type NavProps = {
    name: string,
    link: string,
    active: string
}

const NavBarLink = ({name, link, active}: NavProps) => {

    const bgcolor = name == active ? "bg-blue-400" : ""

    return (
        <Link href={link}>
            <a className={" hover:bg-blue-400 " + bgcolor + " p-4 font-sans text-white text-lg font-medium"}>{name}</a>
        </Link>
    )
}

export default NavBarLink