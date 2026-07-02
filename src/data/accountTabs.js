import { LayoutDashboard, CreditCard, WalletCards, Banknote } from "lucide-react";

const accountTabs = [
        { id: 1, label: "Principal", icon:  LayoutDashboard ,active: true },
        { id: 2, label: "Tarjetas Crédito", icon: CreditCard, active: false },
        { id: 3, label: "Tarjetas Débito", icon: WalletCards, active: false },
        { id: 4, label: "Efectivo", icon: Banknote, active: false },
    ];

export default accountTabs;