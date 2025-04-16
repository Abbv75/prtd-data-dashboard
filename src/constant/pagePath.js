import BonnesPratiques from "../pages/bonnes-pratiques";
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
]