import Brand from "./Brand";
import HeaderActions from "./HeaderActions";
import HeaderTitle from "./HeaderTittle";
import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <header className="flex h-[80px] border-b border-line bg-paper">
            <div className="flex items-center w-[330px] px-[24px] border-r border-line">
                <Brand />
            </div>
            <div className="flex flex-1 items-center px-[32px]">
                <HeaderTitle title="Inicio" />

                <div className="ml-auto flex items-center gap-[16px]">
                    <SearchBar />
                    <HeaderActions />
                </div>
            </div>

        </header>
    );
};

export default Header;