import Footer from "@/Components/Footer"
import Navbar from "@/Components/Navbar"
import { CategoryProvider } from "@/context/CategoryContext"
import { FaWhatsapp } from "react-icons/fa"


function layoutpage({ children }) {
    return (
        <>
            <CategoryProvider>
                <Navbar />
                {children}
                <Footer></Footer>
            </CategoryProvider>
            {/* WhatsApp Floating Button */}
            <div className="fixed bottom-20 right-6 z-50 sm:bottom-10 sm:right-5">
                <a
                    href="https://wa.me/96897297547"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110"
                >
                    <FaWhatsapp size={28} />
                </a>
            </div>


        </>

    )
}

export default layoutpage 