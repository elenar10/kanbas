import { useState } from "react";
import { FilterContext } from ".";

function FilterProvider({ value, children }) {
    const [filterWord, setFilterWord] = useState(value); 
    return (
        <FilterContext.Provider value={[filterWord, setFilterWord]}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterProvider