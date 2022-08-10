import Footer from "../components/footer"
import HeadCustom from "../components/head"
import NavBar, { NavActived } from "../components/navbar"

const About = () => {

    const actived: NavActived = {menu: "About", language: "English"}

    return (
        <>
            <HeadCustom />
            <NavBar {...actived} />
            <h1 className="text-3xl font-bold underline">About</h1>
            <Footer />
        </>
    )
}

export default About