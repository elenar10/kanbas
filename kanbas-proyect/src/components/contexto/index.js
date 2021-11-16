import { createContext } from "react";

export const DateContext = createContext(localStorage.getItem('lastUpdate') ?? 'no ha realizado tarea todavía');