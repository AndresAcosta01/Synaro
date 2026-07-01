import {
    LayoutDashboard,
    Wallet,
    Receipt,
    CreditCard,
    Percent,
    PiggyBank,
    Target,
    Repeat,
    Calendar,
    ChartColumn,
    Search,
    Settings,
} from "lucide-react";

const Navigation = () => {
    const navigation = [
        { id: 1, label: "Dashboard", icon: LayoutDashboard, active: true },
        { id: 2, label: "Ingresos y egresos", icon: Wallet, active: false },
        { id: 3, label: "Centro de pagos", icon: Receipt, active: false },
        { id: 4, label: "Tarjetas", icon: CreditCard, active: false },
        { id: 5, label: "Intereses", icon: Percent, active: false },
        { id: 6, label: "Presupuestos", icon: PiggyBank, active: false },
        { id: 7, label: "Metas", icon: Target, active: false },
        { id: 8, label: "Recurrentes", icon: Repeat, active: false },
        { id: 9, label: "Calendario", icon: Calendar, active: false },
        { id: 10, label: "Reportes", icon: ChartColumn, active: false },
        { id: 11, label: "Buscador", icon: Search, active: false },
        { id: 12, label: "Ajustes", icon: Settings, active: false }
    ];
    return (
        <nav className="h-full px-[16px] py-[20px]">
            <ul className="flex flex-col gap-[8px]">
                {navigation.map((item) => {
                    const Icon = item.icon;
                    return (
                        <li key={item.id}>
                            <button
                                className={`flex items-center gap-[12px] w-full h-[44px] px-[12px] rounded-[10px] text-left hover:bg-paper-2 transition-colors duration-200 ${item.active
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