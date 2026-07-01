import Brand from "./Brand"
import HeaderActions from "./HeaderActions"
import SearchBar from "./SearchBar"

const Header = () => {
    return (
        <header className="flex h-[80px] gap-4 items-center bg-paper border-line">
            <Brand />
            <SearchBar />
            <HeaderActions />
        </header>
    )
}

export default Header