import Accueil from "../pages/Accueil";
import Bonnes_Pratiques from "../pages/Bonnes_Pratiques";
import Encadrement from "../pages/Encadrement";
import FichesProjets from "../pages/FichesProjets";
import PlanAffaire from "../pages/PlanAffaire";
import Financement from "../pages/Financement";
import Techniques from "../pages/Techniques";

export default [
    {
        path: "accueil",
        component: Accueil
    },
    {
        path: "encadrement",
        component: Encadrement
    },
    {
        path: "bonnes-pratiques",
        component: Bonnes_Pratiques
    },
    {
        path: "fiches-projets",
        component: FichesProjets
    },
    {
        path: "plan-affaire",
        component: PlanAffaire
    },
  {
    path: "techniques",
        component: Techniques
    },
    {
        path: "financement",
        component: Financement
    },
]