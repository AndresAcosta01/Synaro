import navigation from "../../data/navigation";

const Navigation = () => {
    return (
        <nav className="h-full px-[16px] py-[20px]">
            <ul className="flex flex-col gap-[8px]">
                {navigation.map((item) => {
                    const Icon = item.icon;
                    return (
                        <li key={item.id}>
                            <button
                                className={`flex items-center gap-[12px] w-full h-[44px] px-[12px] rounded-[10px] text-left transition-colors duration-200 ${item.active
                                    ? "bg-pine/10 text-pine"
                                    : "text-ink hover:bg-paper-2"
                                    }`}>
                                <Icon className={`w-[20px] h-[20px] ${item.active ? "text-pine" : "text-ink"}`}
                                />
                                <span className={`text-[15px] ${item.active ? "font-semibold text-pine" : "font-medium text-ink"}`}>{item.label}</span>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navigation