import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import Main from "../components/layout/Main"
import Sidebar from "../components/layout/Sidebar"

const AppLayout = () => {
    return (
        <div className="h-screen">
            <Header />
            <div className="flex">
                <Sidebar />
                <Main />
            </div>
            <Footer />
        </div>
    )
}

export default AppLayout