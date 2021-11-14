import './style.css'
function SearcherBar(props) {
    return (
        <div className="sub--header__container">
            <div className="version--updated__wrapper">
                <p>Version 1.0.0</p>
                <p>Updated on 12Apr</p>

            </div>
            <div className="search__container">
                <label htmlFor="search"></label>
                <input id="search" name="search" type="text" placeholder=" Encuentra una tarea" className="searchInput"></input>
            </div>
        </div>
    )
}
export default SearcherBar;