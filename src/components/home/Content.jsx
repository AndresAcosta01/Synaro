import AccountTabs from "./AccountTabs"
import AnalyticsSection from "./AnalyticsSection"
import CreditOverview from "./CreditOverview"
import FinancialOverview from "./FinancialOverview"
import Header from "./Header"
import MonthlySummary from "./MonthlySummary"

const HomeContent = () => {
    return (
        <div>
            <Header />
            <AccountTabs />
            <FinancialOverview />
            <MonthlySummary />
            <AnalyticsSection />
            <CreditOverview />
        </div>
    )
}

export default HomeContent