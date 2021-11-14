import './style.css'
function SearcherBar(props) {
    // filterCities(){
    //     // filtra mi array original con los valores actuales de los filtros (el valor del input y el valor de el range)
    //     const filteredCities = this.originalCityList.filter(c => c.population >= this.currentPopulationValue
    //         && this.normalizeCity(c.city).includes(this.currentSearchValue));
    //     this.setState({
    //         cityList: filteredCities
    //     });
    // }
    // filterByName(e){
    //     this.currentSearchValue = this.normalizeCity(e.target.value);
    //     this.filterCities();
    // }
    return (
        <div className="sub--header__container">
            <div className="version--updated__wrapper">
                <p>Version 1.0.0</p>
                <p>AQUI VA ULTIMO UPDATED!</p>

            </div>
            <div className="search__container">
                <label htmlFor="search"></label>
                <input
                    id="search"
                    // onChange={e => filterByName(e)}
                    name="search"
                    type="text"
                    placeholder=" Encuentra una tarea"
                    className="searchInput"></input>
            </div>
        </div>
    )
}
export default SearcherBar;