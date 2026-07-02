import { WalletCards, CreditCard } from "lucide-react";

const FinancialOverview = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] mb-[32px]">
            <div className="rounded-[20px] bg-clay p-[24px] text-paper shadow-sm">
                <div className="flex items-center gap-[8px]">
                    <WalletCards className="w-[18px] h-[18px]" />
                    <h3 className="text-[15px] font-medium">
                        Deuda total a la fecha
                    </h3>
                </div>
                <p className="mt-[12px] text-[42px] leading-none font-bold">
                    $0
                </p>
                <p className="mt-[10px] text-[14px] opacity-90">
                    No tienes deudas registradas.
                </p>
            </div>

            <div className="rounded-[20px] bg-pine p-[24px] text-paper shadow-sm">
                <div className="flex items-center gap-[8px]">
                    <CreditCard className="w-[18px] h-[18px]" />
                    <h3 className="text-[15px] font-medium">
                        Dinero disponible en débito
                    </h3>
                </div>
                <p className="mt-[12px] text-[42px] leading-none font-bold">
                    $0
                </p>
                <p className="mt-[10px] text-[14px] opacity-90">
                    No hay cuentas de débito registradas.
                </p>
            </div>
        </section>
    );
};

export default FinancialOverview;