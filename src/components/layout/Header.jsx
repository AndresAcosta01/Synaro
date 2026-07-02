import Brand from "./Brand";
import HeaderActions from "./HeaderActions";
import HeaderTitle from "./HeaderTittle";
import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <header className="flex h-[65px] border-b border-line bg-paper">
            <div className="hidden lg:flex items-center w-[290px] px-[24px] border-r border-line">
                <Brand />
            </div>
            <div className="flex flex-1 items-center px-[16px] md:px-[24px] xl:px-[32px]">
                <HeaderTitle title="Inicio" />
                <div className="ml-auto flex items-center gap-[12px] md:gap-[16px]">
                    <SearchBar />
                    <HeaderActions />
                </div>
            </div>
        </header>
    );
};

export default Header;