import logo from "../../assets/images/logo-icon.png";

const Brand = () => {
    return (
        <a
            href="/"
            className="flex items-center gap-[14px] w-[320px] shrink-0"
        >
            <img
                src={logo}
                alt="Synaro"
                className="w-[52px] h-[52px] rounded-[14px]"
            />

            <div className="flex-1 flex flex-col">
                <h1 className="font-display text-[20px] font-bold tracking-[4px] leading-none text-ink uppercase">
                    Synaro
                </h1>

                <p className="mt-[4px] text-[10px] tracking-[2px] uppercase text-gray-500 whitespace-nowrap">
                    Todo tu dinero. Un solo lugar.
                </p>
            </div>
        </a>
    );
};

export default Brand;