import accountTabs from "../../data/accountTabs";

const AccountTabs = () => {
    return (
        <section className="mb-[32px]">
            <nav className="p-[4px] rounded-[14px] bg-paper border border-line">
                <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[6px]">
                    {accountTabs.map((item) => {
                        const Icon = item.icon;

                        return (
                            <li key={item.id}>
                                <button
                                    className={`flex items-center justify-center w-full h-[44px] rounded-[10px] text-[14px] font-medium transition-colors duration-200 gap-[10px] ${item.active ? "bg-pine text-paper shadow-sm" : "text-ink hover:bg-paper-2"}`}
                                >
                                    <Icon className="w-[18px] h-[18px] shrink-0" />
                                    <span className="truncate">{item.label}</span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </section>
    );
};

export default AccountTabs;