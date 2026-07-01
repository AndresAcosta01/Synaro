import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Main from "../components/layout/Main";
import Sidebar from "../components/layout/Sidebar";

const AppLayout = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />

            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <Main />
            </div>
        </div>
    );
};

export default AppLayout;