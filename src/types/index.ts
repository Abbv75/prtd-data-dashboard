export type USE_STATE_T = React.Dispatch<React.SetStateAction<any>>

export type LOADING_STATE_T = "En cours de chargement."
    | "Chargement finit."
    | "Chargement échoué."
    | "Chargememnt reussi"
    | "En attente"
    | null; 