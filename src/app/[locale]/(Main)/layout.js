import Footer from "@/Components/Footer"
import Navbar from "@/Components/Navbar"
import { CategoryProvider } from "@/context/CategoryContext"


function layoutpage({ children }) {
    return (
        <>
            <CategoryProvider>
                <Navbar />
                {children}
                <Footer></Footer>
            </CategoryProvider>

        </>

    )
}

export default layoutpage 