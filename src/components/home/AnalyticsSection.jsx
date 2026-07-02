const AnalyticsSection = () => {
    return (
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-[24px] mb-[32px]">
            <article className="xl:col-span-2 rounded-[20px] border border-line bg-paper p-[24px]">
                <h3 className="text-[18px] font-semibold text-ink">Ingresos vs Gastos</h3>
                <div className="flex flex-col items-center justify-center h-[320px] gap-[16px]">
                    <div className="flex items-center justify-center w-[72px] h-[72px] rounded-full bg-paper border border-line">
                        📊
                    </div>
                    <h4 className="text-[18px] font-semibold text-ink">Sin información</h4>
                    <p className="max-w-[320px] text-center text-[14px] text-gray-500">
                        Agrega ingresos y gastos para visualizar el comportamiento financiero.
                    </p>
                </div>
            </article>
            <article className="rounded-[20px] border border-line bg-paper p-[24px]">
                <h3 className="text-[18px] font-semibold text-ink">Gastos por categorías</h3>
                <div className="flex flex-col items-center justify-center h-[320px] gap-[16px]">
                    <div className="flex items-center justify-center w-[72px] h-[72px] rounded-full bg-paper border border-line">
                        🥧
                    </div>
                    <h4 className="text-[18px] font-semibold text-ink">Sin categorías</h4>
                    <p className="max-w-[250px] text-center text-[14px] text-gray-500">
                        Los gastos aparecerán agrupados por categorías cuando registres movimientos.
                    </p>
                </div>
            </article>
        </section>
    );
};

export default AnalyticsSection;