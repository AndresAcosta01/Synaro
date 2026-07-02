import Navigation from "./Navigation";
import UserProfile from "./UserProfile";

const Sidebar = () => {
    return (
        <aside className="hidden lg:flex flex-col justify-between w-[290px] xl:w-[290px] shrink-0 border-r border-line bg-paper">
            <Navigation />
            <UserProfile />
        </aside>
    );
};

export default Sidebar;