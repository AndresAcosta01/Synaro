import accountTabs from "../../data/accountTabs";
const AccountTabs = () => {

    return (
        <section className="mb-[32px]">
            <nav className="p-[4px] rounded-[14px] bg-paper border border-line">
                <ul className="flex gap-[6px]">
                    {accountTabs.map((item) => (
                        <li key={item.id} className="flex-1">
                            <button
                                className={`flex items-center justify-center w-full h-[44px] rounded-[10px] text-[14px] font-medium transition-colors duration-200 
                                    ${item.active
                                        ? "bg-pine text-paper shadow-sm"
                                        : "text-ink hover:bg-paper-2"
                                    }`}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    );
};

export default AccountTabs;