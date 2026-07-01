import AccountTabs from "./AccountTabs"
import AnalyticsSection from "./AnalyticsSection"
import CreditOverview from "./CreditOverview"
import FinancialOverview from "./FinancialOverview"
import MonthlySummary from "./MonthlySummary"

const HomeContent = () => {
    return (
        <div>
            <AccountTabs />
            <FinancialOverview />
            <MonthlySummary />
            <AnalyticsSection />
            <CreditOverview />
        </div>
    )
}

export default HomeContent