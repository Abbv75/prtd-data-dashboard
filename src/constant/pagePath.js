import BonnesPratiques from "../pages/bonnes-pratiques";
import FichesProjets from "../pages/fiches-projets";
import Techniques from "../pages/techniques";

export default [
    {
        path: "/",
        title: "Techniques et technologies",
        component: Techniques
    },
    {
        path: "/bonnes-pratiques",
        title: "Bonnes pratiques",
        component: BonnesPratiques
    },
    {
        path: "/fiches-projets",
        title: "Fiches projets",
        component: FichesProjets
    },
]