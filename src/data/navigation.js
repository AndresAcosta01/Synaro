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

export default navigation;