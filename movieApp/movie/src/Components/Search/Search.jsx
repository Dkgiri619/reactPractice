import "./Search.css";
const Search = (props)=>{
    return <div className="search">
        <input type="text" name="box" id="searchBox" onKeyUp={props.searchItems} />
    </div>
}
export default Search;