import { TrendingUp, TrendingDown, Scale, PiggyBank, } from "lucide-react";

const monthlySummary = [
        {
            id: 1,
            title: "Ingresos del mes",
            value: "$0",
            description: "Sin ingresos registrados.",
            icon: TrendingUp,
            color: "text-pine",
            background: "bg-green-200",
        },
        {
            id: 2,
            title: "Gastos del mes",
            value: "$0",
            description: "Sin gastos registrados.",
            icon: TrendingDown,
            color: "text-clay",
            background: "bg-red-200",
        },
        {
            id: 3,
            title: "Flujo de caja",
            value: "$0",
            description: "Aún no hay movimientos.",
            icon: Scale,
            color: "text-marigold",
            background: "bg-yellow-100",
        },
        {
            id: 4,
            title: "Presupuesto",
            value: "$0",
            description: "No hay presupuestos creados.",
            icon: PiggyBank,
            color: "text-moss",
            background: "bg-emerald-200",
        }
    ];

export default monthlySummary;