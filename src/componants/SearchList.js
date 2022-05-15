function SearchList()
{
    return (
       <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
         <label htmlFor="search" >
                search
         </label>

         <input
           id="search"
           type= "text"
           role= 'searchbox'
           placeholder = "Search Item"
         >
         </input>
       </form>
    );
}

export default SearchList;