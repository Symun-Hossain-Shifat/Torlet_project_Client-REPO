import Footer from "@/Components/Footer"
import Navbar from "@/Components/Navbar"


function layoutpage({ children }) {
    return (
        <>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </>

    )
}

export default layoutpage 