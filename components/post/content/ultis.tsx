export const LinkCustom = ({link, text} : {link: string, text: string}) => {
    return (
        <a href={link} target='_blank' rel="noreferrer" className='text-blue-500'> {text} </a>
    )
}