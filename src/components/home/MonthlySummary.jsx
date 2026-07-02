import monthlySummary from "../../data/monthlySummary";

const MonthlySummary = () => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[24px] mb-[32px]">
            {monthlySummary.map((item) => {
                const Icon = item.icon;

                return (
                    <article
                        key={item.id}
                        className="rounded-[18px] border border-line bg-paper p-[20px]"
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="text-[12px] font-semibold uppercase tracking-wide text-gray-500">
                                    {item.title}
                                </h3>
                                <p className="mt-[10px] text-[38px] leading-none font-bold text-ink">
                                    {item.value}
                                </p>
                            </div>
                            <div className={`flex items-center justify-center w-[40px] h-[40px] rounded-[12px] ${item.background}`}>
                                <Icon className={`w-[20px] h-[20px] ${item.color}`} />
                            </div>
                        </div>
                        <p className="mt-[18px] text-[14px] text-gray-500">
                            {item.description}
                        </p>
                    </article>
                );
            })}
        </section>
    );
};

export default MonthlySummary;