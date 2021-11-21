import { useContext } from 'react';
import './style.css'
import { DateContext } from '../contexto';
import { FilterContext } from '../contexto/context-filter';
import { version } from '../../../package.json'

function SearcherBar() {
    const [date] = useContext(DateContext);
    const [filterWord, setFilterWord] = useContext(FilterContext);

    const handleChange = (e) => {
        setFilterWord(e.target.value)
    }
    return (
        <div className="sub--header__container">
            <div className="version--updated__wrapper">
                <p className="version">Version {version}</p>
                <p>{date}</p>

            </div>
            <div className="search__container">
                <label htmlFor="search"></label>
                <input
                    id="search"
                    name="search"
                    type="text"
                    placeholder="🔎 Encuentra una tarea"
                    className="searchInput"
                    onChange={handleChange}></input>
            </div>
        </div>
    )
}
export default SearcherBar;