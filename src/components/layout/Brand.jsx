import logo from "../../assets/images/logo-icon.png";

const Brand = () => {
    return (
        <a
            href="/"
            className="flex items-center gap-[14px] w-full">
            <img
                src={logo}
                alt="Synaro"
                className="w-[40px] h-[38px] rounded-[8px]" />
            <div className="flex flex-col overflow-hidden">
                <h1 className="font-display text-[19px] font-bold tracking-[4px] leading-none text-ink uppercase whitespace-nowrap">
                    Synaro
                </h1>
                <p className="mt-[4px] text-[8px] tracking-[2px] uppercase text-gray-500 whitespace-nowrap">
                    Todo tu dinero. Un solo lugar.
                </p>
            </div>
        </a>
    );
};

export default Brand;