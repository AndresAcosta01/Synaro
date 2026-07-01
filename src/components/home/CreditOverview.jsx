import { CreditCard, TrendingUp } from "lucide-react";

const CreditOverview = () => {
    return (
        <section className="flex gap-[24px]">
            <article className="flex-[2] rounded-[20px] border border-line bg-paper p-[24px]">
                <div className="flex items-center gap-[10px] mb-[20px]">
                    <TrendingUp className="w-[20px] h-[20px] text-clay" />
                    <h3 className="text-[18px] font-semibold text-ink">
                        Evolución de la deuda
                    </h3>
                </div>

                <div className="relative h-[260px] rounded-[12px] border border-dashed border-line overflow-hidden">

                    <div className="absolute inset-0 flex flex-col justify-evenly px-[20px]">
                        <div className="border-t border-line"></div>
                        <div className="border-t border-line"></div>
                        <div className="border-t border-line"></div>
                        <div className="border-t border-line"></div>
                        <div className="border-t border-line"></div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <p className="text-[18px] font-semibold text-ink">
                                Sin historial de deuda
                            </p>
                        </div>
                    </div>
                </div>
            </article>

            <article className="flex-1 rounded-[20px] border border-line bg-paper p-[24px]">
                <div className="flex items-center gap-[10px] mb-[20px]">
                    <CreditCard className="w-[20px] h-[20px] text-pine" />
                    <h3 className="text-[18px] font-semibold text-ink">
                        Uso de tarjetas
                    </h3>
                </div>
                <div className="relative h-[260px] rounded-[12px] border border-dashed border-line flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-[18px] font-semibold text-ink">
                            Sin tarjetas
                        </p>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default CreditOverview;