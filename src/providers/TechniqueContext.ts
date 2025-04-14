import { createContext } from "react";
import { USE_STATE_T } from "../types";

export const TechniqueContext = createContext({} as {
    categorieId: number | null,
    setcategorieId: USE_STATE_T,
    loadTechniqueCategorie?: any
})