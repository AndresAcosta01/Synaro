import { Search } from "lucide-react";

const SearchBar = () => {
    return (
        <section className="hidden sm:block w-[200px] sm:w-[230px] sm:w-[300px]">
            <form>
                <div
                    className="
                        flex items-center h-[44px] px-[14px] rounded-[10px] border border-line bg-paper transition-all duration-200 focus-within:border-pine focus-within:ring-2 focus-within:ring-pine">
                    <Search className="w-[18px] h-[18px] text-gray-400 shrink-0" />
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="flex-1 ml-[10px] bg-transparent outline-none text-[15px] placeholder:text-gray-400" />
                </div>
            </form>
        </section>
    );
};

export default SearchBar;