import Content from "../home/Content";
import Footer from "./Footer";

const Main = () => {
    return (
        <main className="flex-1 overflow-y-auto bg-paper-2">
            <div className="p-[16px] md:p-[24px] xl:p-[32px]">
                <Content />
            </div>
            <Footer />
        </main>
    );
};

export default Main;