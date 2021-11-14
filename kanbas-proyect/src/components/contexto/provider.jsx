import { useState } from "react";
import { DateContext } from "./";

function DateProvider({ value, children }) {
    const [date, setDate] = useState(value); 
    return (
        <DateContext.Provider value={[date, setDate]}>
            {children}
        </DateContext.Provider>
    )
}

export default DateProvider
