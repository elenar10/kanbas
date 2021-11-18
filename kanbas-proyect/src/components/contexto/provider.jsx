import { useState } from "react";
import { DateContext } from "./";

function DateProvider({ value, children }) {
    const [date, setDate] = useState(localStorage.getItem('lastUpdate') ?? 'No tienes tareas');

    return (
        <DateContext.Provider value={[date, setDate]}>
            {children}
        </DateContext.Provider>
    )
}

export default DateProvider
