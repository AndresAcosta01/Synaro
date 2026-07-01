import Navigation from "./Navigation"
import UserProfile from "./UserProfile"

const Sidebar = () => {
    return (
        <aside className="flex flex-col justify-between w-[330px] shrink-0 px-[24px] border-r border-line bg-paper">
            <Navigation />
            <UserProfile />
        </aside>
    )
}

export default Sidebar