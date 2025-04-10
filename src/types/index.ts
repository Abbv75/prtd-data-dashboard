export type USE_STATE_T = React.Dispatch<React.SetStateAction<any>>

export type LOADING_STATE_T = "En cours de chargement."
    | "Chargement finit."
    | "Chargement échoué."
    | "Chargememnt reussi"
    | "En attente"
    | null;

export interface RESPONSE_T {
    message: string;
    code: number;
    data: any;
}

export interface TECHNIQUE_CATEGORIE_T {
    idTechniquesCategorie: number;
    nomTechniquesCategorie: string;
    descriptionTechniquesCategorie?: string;
}