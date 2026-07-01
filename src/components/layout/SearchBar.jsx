const SearchBar = () => {
    return (
        <section className="flex-1">
            <form className="w-full">
                <input 
                className="w-full h-[44px] px-[16px] rounded-[10px] border border-gray-200 outline-none"
                type="text" 
                placeholder="Buscar..."/>
            </form>
        </section>
    )
}

export default SearchBar