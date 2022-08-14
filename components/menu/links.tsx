import Link from "next/link"

export type MenuProps = {
    label: string,
    page: string,
    clicked: boolean,
    locale?: string,
}

const MenuLinks = ({label, page, clicked, locale}: MenuProps) => {

    const bgcolor = clicked ? "bg-blue-400" : ""

    return (
        <Link href={page} locale={locale}>
            <a className={" hover:bg-blue-400 " + bgcolor + " p-4 font-sans text-white text-lg font-medium"}>
                {label}
            </a>
        </Link>
    )
}

export default MenuLinks