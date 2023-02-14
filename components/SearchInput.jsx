const SearchInput = ({ searchValue, setSearchValue }) => {
    return (
        <input
            className='bg-transparent border-none text-white w-[95%] sm:w-[160%] focus:outline-none text-2xl placeholder:text-center'
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="شهر مورد نظر  ..."
            autoFocus
        />
    )
}
export default SearchInput