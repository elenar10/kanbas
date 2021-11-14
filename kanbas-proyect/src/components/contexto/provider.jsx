import { useState } from "react";
import { DateContext } from ".";

function DateProvider({ value, children }) {
    const [date, setDate] = useState(value); // creo variable de estado con el valor por defecto el value
    return (
        <DateContext.Provider value={[date, setDate]}>
            {children}
        </DateContext.Provider>
    )
}

export default DateProvider