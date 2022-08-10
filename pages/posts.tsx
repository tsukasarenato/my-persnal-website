import Footer from "../components/footer"
import HeadCustom from "../components/head"
import NavBar, { NavActived } from "../components/navbar"

const Posts = () => {

    const actived: NavActived = {menu: "Posts", language: "English"}

    return (
        <>
            <HeadCustom />
            <NavBar {...actived} />
            <h1 className="text-3xl font-bold underline">Posts</h1>
            <Footer />
        </>
    )
}

export default Posts