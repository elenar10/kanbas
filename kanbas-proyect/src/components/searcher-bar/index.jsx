import { useEffect, useState } from 'react';
import './style.css'

function SearcherBar(props) {
    const [date, setDate] = useState('');
    const day = new Date();
    setDate(`Updated on ${day.getDate()}/${day.getMonth() + 1}/ ${day.getSeconds()}`);

    // const [load, setLoad] = useState(true);
    // useEffect(() => {
    //     const day = new Date();
    //     const fecha = `Updated on ${day.getDate()}/${day.getMonth() + 1}/ ${day.getSeconds()}`;

    // }, [load])



    return (
        <div className="sub--header__container">
            <div className="version--updated__wrapper">
                <p>Version 1.0.0</p>
                <p>{date}</p>

            </div>
            <div className="search__container">
                <label htmlFor="search"></label>
                <input
                    id="search"
                    name="search"
                    type="text"
                    placeholder=" Encuentra una tarea"
                    className="searchInput"></input>
            </div>
        </div>
    )
}
export default SearcherBar;